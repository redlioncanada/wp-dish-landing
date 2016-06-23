import {Pipe} from 'angular2/core'

@Pipe({
	name: "insertBreak"
})
export class InsertBreakPipe {
	//replaces all spaces with <br/> unless it's preceded by a word with length 1
	transform(str) {
		var arr = str.split(' ')
		str = ''

		for (var i in arr) {
			if (arr[i].length == 1) {
				if (Number(i) == arr.length - 1) str += arr[i]
				else str += arr[i] + ' '
			}
			else str += arr[i] + '<br/>'
		}
		return str
	}
}