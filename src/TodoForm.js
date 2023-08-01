// submit 이벤트 처리하는 곳에서 onSubmit을 호출하도록 함.
export default function TodoForm({ $target, onSubmit }) {
    const $form = document.createElement('form')

    $target.appendChild($form)
    
    let isInit = false

    this.render = () => {
        $form.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button>
        `

        if(!isInit) {
            $form.addEventListener('submit', e => {
                e.preventDefault()

                const $todo = $form.querySelector('input[name=todo]')
                const text = $todo.value

                // 두 글자 이상만 추가되도록
                if(text.length > 1) {
                    // 추가 후 input의 글자 지우기
                    $todo.value = ''
                    onSubmit(text)
                }
            })
            isInit = true
        }
    }
    this.render()
}