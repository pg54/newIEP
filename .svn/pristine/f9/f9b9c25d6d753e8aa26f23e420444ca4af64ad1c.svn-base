/**
 * Created by Administrator on 2017/8/3 0003.
 */
setContent(str) {
    let len = str.length
    let aTimes = parseInt((len/30))
    let arr = []
    for (let i=0;i<aTimes+1;i++) {
        let chunkStr
        if (i === aTimes) {
            chunkStr  = str.substring(30*i,len)
        } else {
            chunkStr = str.substring(30*i,30*(i+1)) + '<br>'
        }
        arr.push(chunkStr)
    }
    console.log('is ok')
    console.log(arr.join(''))
    return arr.join('')
}
