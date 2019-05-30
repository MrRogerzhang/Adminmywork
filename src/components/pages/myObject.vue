<template>
  <div>
    <!-- title -->
    <div class="toheader">
      <h1 class="totitle">
        记事本
        <a class="t-btn" @click="showTools">
          <span></span>
        </a>
      </h1>
    </div>

    <!-- 填入项input -->
    <div class="event-add">
      <input type="text" class="n-input" v-model="content" placeholder="待办事项" @keyup.enter="submit">
      <button class="add-btn" @click="submit">提交</button>
    </div>

    <!-- 产生修改项 -->
    <div class="event-content">
      <div class="event-tab" @click="changeCollapse(0,$event)">
        未完成
        <span :class="{'close-span': !collapse[0].show}"></span>
      </div>
      <div class="event-box" :style="{'height':'auto','display':'block'}">
        <ul>
          <li class="event-list" v-for="value in getToDo" :key="value.id">
            <input type="checkbox" :key="value.id" @click="moveToDone(value.id)">
            <div>{{value.content}}</div>
            <button class="cancel-btn" @click="moveCancel(value.id)">取消</button>
          </li>
        </ul>
      </div>

      <div class="event-tab" @click="changeCollapse(1,$event)">
        已完成
        <span :class="{'close-span': !collapse[1].show}"></span>
      </div>
      <div class="event-box">
        <ul>
          <li class="event-list" v-for="value in getDone" :key="value.id">
            <input type="checkbox" :key="value.id" checked @click="moveToDo(value.id)">
            <div>{{value.content}}</div>
            <span class="event-time">{{value.time}}</span>
          </li>
        </ul>
      </div>

      <div class="event-tab" @click="changeCollapse(2,$event)">
        已取消
        <span :class="{'close-span': !collapse[2].show}"></span>
      </div>
      <div class="event-box" :class="{'event-box-hide': false}">
        <ul>
          <li class="event-list" v-for="value in getCancel" :key="value.id">
            <div class="event-delete">{{value.content}}</div>
            <button class="cancel-btn" @click="moveToDo(value.id)">恢复</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      collapse: [
        {
          show: true
        },
        {
          show: true
        },
        {
          show: true
        }
      ],
      content: ""
    };
  },
  computed: {
    // 获取未完成数据
    getToDo() {
      return this.$store.getters.getToDo;
    },
    // 获取已完成数据
    getCancel() {
      return this.$store.getters.getCancel;
    },
    // 获取已取消数据
    getDone() {
      return this.$store.getters.getDone;
    }
  },
  methods: {
    // 点击提交时，执行性Store
    submit(e) {
      let self = this,
        // 定义发送的初始数据
        params = {
          id: 0,
          type: 1,
          content: "",
          time: ""
        };
      self.content = self.content.trim();
      if (self.content) {
        params.content = self.content;
        self.$store.dispatch("addevent", params);
        self.content = "";
      } else {
        console.log("没有内容，请输入内容");
      }
    },
    changeCollapse(num, event) {
      const show = this.collapse[num].show;
      if (show) {
        this.closeCollapse(event);
      } else {
        this.openCollapse(event);
      }
      this.collapse[num].show = !show;
    },
    closeCollapse(event) {
      // 关闭折叠面板
      let ulElement = event.currentTarget.nextElementSibling,
        children = ulElement.getElementsByTagName("ul")[0];
      ulElement.style.height = children.offsetHeight + "px";
      setTimeout(function() {
        ulElement.style.height = "0px";
        setTimeout(function() {
          ulElement.style.display = "none";
        }, 300);
      }, 10);
    },
    openCollapse(event) {
      // 打开折叠面板
      let ulElement = event.currentTarget.nextElementSibling,
        children = ulElement.getElementsByTagName("ul")[0];
      ulElement.style.display = "block";
      ulElement.style.height = children.offsetHeight + "px";
      setTimeout(function() {
        ulElement.style.height = "auto";
      }, 300);
    },
    showTools(e) {
      console.log(e);
    },

    // 进入已完成
    moveToDone(id) {
      this.$store.dispatch('moveToDone', id)
    },
    // 进入到已取消
    moveCancel(id) {
      // 执行取消事件
      this.$store.dispatch("moveCancel", id);
    },
    // 回到未完成
    moveToDo(id) {
      this.$store.dispatch("moveToDo" , id)
    }
  }
};
</script>



<style lang="scss" rel="stylesheet/scss">
.toheader {
  position: relative;
  width: 100%;
  height: 70px;
  z-index: 100;
  h1 {
    position: relative;
    width: 100%;
    max-width: 800px;
    font-size: 36px;
    margin: 0 auto;
    line-height: 70px;
    text-align: center;
    color: rgb(24, 3, 3);
    a.t-btn {
      position: absolute;
      right: 10px;
      top: 22px;
      width: 30px;
      height: 26px;
      cursor: pointer;
    }
    span,
    span:before,
    span:after {
      position: absolute;
      left: 0;
      width: 30px;
      height: 4px;
      content: "";
      background: rgb(20, 2, 2);
    }
    span {
      top: 11px;
      &:before {
        top: 0;
        transform: translateY(-7px);
        transition: all 0.3s;
      }
      &:after {
        transform: translateY(7px);
        transition: all 0.3s;
      }
    }
  }
}

.event-add {
  position: relative;
  padding: 30px 90px 30px 0;
  font-size: 16px;
  .n-input {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 26px;
    border: 1px solid #4f6680;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-sizing: border-box;
    font-size: inherit;
    &:focus {
      outline: none;
    }
  }
  .add-btn {
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: rgb(40, 104, 141);
    /*transition: background .3s ease-in;*/
  }
}

.event-content {
  .event-tab {
    position: relative;
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    color: rgb(34, 125, 161);
    cursor: pointer;
    span {
      position: absolute;
      right: 20px;
      top: 15px;
      width: 10px;
      height: 10px;
      content: "";
      border: {
        top: 2px solid #000;
        right: 2px solid #000;
      }
      transform: rotate(135deg);
      transition: transform 0.3s;
      &.close-span {
        transform: rotate(45deg);
      }
    }
  }
  .event-box {
    list-style: none;
    overflow: hidden;
    border: {
      left: 1px solid #eee;
      right: 1px solid #eee;
    }
    transition: height 0.3s;
    .event-list {
      position: relative;
      min-height: 44px;
      line-height: 25px;
      padding: 10px 100px 10px 50px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      color: #373e40;
      input[type="checkbox"] {
        position: absolute;
        left: 15px;
        top: 12px;
        width: 20px;
        height: 20px;
      }
      .cancel-btn {
        position: absolute;
        right: 10px;
        top: 7px;
        width: 50px;
        height: 30px;
        line-height: 30px;
        padding: 0;
        background: #fff;
        border: 1px solid #c0ccda;
        color: #666;
        font-size: 12px;
      }
      .event-time {
        position: absolute;
        right: 10px;
        top: 0;
        line-height: 44px;
        font-size: 12px;
        color: #aaa;
      }
      .event-delete {
        text-decoration: line-through;
        color: #999;
      }
    }
  }
}
</style>
