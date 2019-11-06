import 簡化 from './簡繁處理.coffee'
import './樣式.sass'

window.onload = ->
    a = $('#全, #全 *').contents().filter ->
        this.nodeType == 3
    for i in a
        word = i.nodeValue
        i = $(i)
        if /^([\x00-\x7f])*$/.test(word)
            continue
        i.after("<span class='lang--cht'>#{word}</span>")
        i.after("<span class='lang--chs'>#{簡化(word)}</span>")
        i.remove()
    $('.lang--cht').css('display', '')
    $('.lang--chs').css('display', 'none')

    $('#用--cht').click ->
        $('.lang--cht').css('display', '')
        $('.lang--chs').css('display', 'none')
    $('#用--chs').click ->
        $('.lang--cht').css('display', 'none')
        $('.lang--chs').css('display', '')

