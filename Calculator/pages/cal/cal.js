Page({
  data:{
    screenData:"0.0",
    idBack: "back",
    idClear: "clear",
    idAdd: "+",
    idNegative: "-",
    idX: "x",
    idChu:"/",
    idEqual:"=",
    idNum1: "1",
    idNum2: "2",
    idNum3: "3",
    idNum4: "4",
    idNum5: "5",
    idNum6: "6",
    idNum7: "7",
    idNum8: "8",
    idNum9: "9",
    idNum0:"0"
  },
  history:function(){
    wx.navigateTo({
      url:'../index/index'
    })
  },
  clearOne:function(event){
    console.log(event);
    this.setData({screenData:event.target.id});
  }

})