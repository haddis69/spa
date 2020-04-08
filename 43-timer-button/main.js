requirejs.config({
    'paths':{
        'jquery':'//apps.bdimg.com/libs/juqery/2.1.4/juqery.min'
    }
});

require(['jquery'],function($){
  $(function(){
        var $btnAdd = $('#add');
        $btnAdd.click(function(){
            require(['timer-button'],function(TimerButton){
               var tb = new TimerButton();
                tb.show({
                    num:6,
                    title:'同意',
                    onClick:function(){
                        alert('点击了定时器按钮');
                    }
                }); 
            });
        });
    });  
});

