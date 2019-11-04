import 簡化 from './簡繁處理.coffee'
import './樣式.sass'

window.onload = ->
    a = $('#全, #全 *').contents().filter ->
        this.nodeType == 3
    for i in a
        word = i.nodeValue
        i = $(i)
        if /^( |\n|\t)*$/.test(word)
            continue
        i.after("<span v-if='lang==\"cht\"'>#{word}</span>")
        i.after("<span v-if='lang==\"chs\"'>#{簡化(word)}</span>")
        i.remove()
    
    v = new Vue
        el: '#全'
        data:
            lang: 'cht'
            
    $('#語言--cht').click ->
        v.lang = 'cht'
    $('#語言--chs').click ->
        v.lang = 'chs'

