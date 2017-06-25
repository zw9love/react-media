import $ from 'jquery'


export function myScroll(obj, json) {
    $(window).on('scroll', () => {
        var sumHeight = $(document).height()
        var clientHeight = $(window).height()
        var scrollTop = $(window).scrollTop()
        var n = (clientHeight + scrollTop) / sumHeight
        if (n >= 0.95 && !obj.state.lock) {
            obj.setState({lock: true})
            if (obj.state[json['data_name']].length > json['num']) return
            obj[json['fn_name']]()
            obj.setState({lock: false})
        }
    })
}

export function unScroll() {
    $(window).off()
}
