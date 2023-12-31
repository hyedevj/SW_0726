// params.$target - 해당 컴포넌트가 추가 될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기 상태
export default function TodoList({ $target, initialState }) {
    const $todoList = document.createElement('div');

    $target.appendChild($todoList);

    this.state = initialState;

    // setState 함수를 추가함
    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $todoList.innerHTML = `
            <ul>
                ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
            </ul>
        `
    }

    this.render();
}