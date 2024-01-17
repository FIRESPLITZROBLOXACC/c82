canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)

{



    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)

{



    mouseEvent = "mouseleave";
}


canvas.addEventListener("mouseUp", my_mouseUp);

function my_mouseUp(e)

{



    mouseEvent = "mouseUp";
}




canvas.addEventListener("mousemove", my_mousemove );
function my_mousemove(e)

{

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clienty - canvas.offsetTop;
     


    if (mouseEvent =="mouseDown") {

            ctx.beginPath();
            ctx.strokeStylee = color;
            ctx.lineWidth = width_of_line;

            ctx.moveTo(last_position_of_x, last_position_of_y);

            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
    }


    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y

}

