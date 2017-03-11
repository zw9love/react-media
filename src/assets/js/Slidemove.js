
const $ = require('jquery');
exports.go = (str) => {
    // console.log(str);
        var arr = (str == 'touch') ?  ['touchstart','touchmove','touchend'] : ['mousedown','mousemove','mouseup','mouseleave'];

        $('.media_header_info ul').on(arr[0],function(e){
            // e.preventDefault();
            $(this).removeAttr('class');
            var max=Number($(this).attr('mymax'));
            var translate=$(this)[0].style['transform'];
            var index1=translate.indexOf('(');
            var index2=translate.indexOf('p');
            var now=parseInt(translate.slice(index1+1,index2));
            var x1=(str == 'touch') ?  e.originalEvent.changedTouches[0].clientX  : e.clientX ;
            var start=new Date().getTime();
            $(this).on(arr[1],function(e){
                e.preventDefault();
                var x2=(str == 'touch') ?  e.originalEvent.changedTouches[0].clientX  : e.clientX ;
                var dis=x2-x1+now;
                if(dis>0){
                    dis=0;
                }

                if(dis<-max){
                    dis=-max;
                }

                $(this).css({
                    'transform':'translateX('+dis+'px)',
                    '-webkit-transform':'translateX('+dis+'px)'
                });
            });

            $(this).on(arr[2],function(e){
                // e.preventDefault();
                $(this).addClass('scroller1');
                $(this).off(arr[1]);
                $(this).off(arr[2]);
                var end=new Date().getTime();
                var x3=(str == 'touch') ?  e.originalEvent.changedTouches[0].clientX  : e.clientX ;
                var time=end-start;
                var translate=$(this)[0].style['transform'];
                var index1=translate.indexOf('(');
                var index2=translate.indexOf('p');
                var now=parseInt(translate.slice(index1+1,index2));

                // 说明用户很急
                if(time<200 && Math.abs(x3-x1)>=20){
                    // $(this).addClass('scroller1');
                    if(x3-x1>0){
                        $(this).css({
                            'transform':'translateX(0px)',
                            '-webkit-transform':'translateX(0px)'
                        });
                    }else{
                        $(this).css({
                            'transform':'translateX('+(-max)+'px)',
                            '-webkit-transform':'translateX('+(-max)+'px)'
                        });
                    }
                }else{
                    // $(this).addClass('scroller2');
                    var val=now+(x3-x1)*0.8;
                    if(val>0){
                        val=0;
                    }
                    if(val<-max){
                        val=-max;
                    }

                    $(this).css({
                        'transform':'translateX('+val+'px)',
                        '-webkit-transform':'translateX('+val+'px)'
                    });
                }

            });

            if( arr.length > 3 ){
                $(this).mouseleave(function(){
                    $(this).trigger('mouseup');
                });
            }
        });
}

    // slideMove('touch');
    // slideMove('mouse');
