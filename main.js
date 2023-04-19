$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault(e)

        const novaTarefa = $('#tarefa-adicionar').val()
        const novoItem = $('<li> </li>')

        $(` <div type="button" class="tarefa">
        <h4>${novaTarefa} </h2>
    </div>`).appendTo(novoItem)

    novoItem.appendTo('ul')


    })
    $('ul').on('click', '.tarefa', function() {
        
        if ($(this).data('clicado')) {
            
            $(this).css('text-decoration', 'none');
        } else {
            
            $(this).css('text-decoration', 'line-through');
        }
        
        
        $(this).data('clicado', !$(this).data('clicado'));
    })
    

    })


