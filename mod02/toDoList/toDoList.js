document.addEventListener('DOMContentLoaded', function () {
    const inputTarefa = document.getElementById("input-tarefa");
    const btnTarefa = document.getElementById("btn-tarefa");
    const tarefas = document.getElementById("tarefas");

    function criaLi() {
        return document.createElement('li');
    }

    function limpaInput() {
        inputTarefa.value = "";
        inputTarefa.focus();
    }

    function criaBotoes(lista) {
        const div = document.createElement('div');
        div.classList.add('acoes');

        const botaoEditar = document.createElement('button');
        botaoEditar.innerText = 'editar';
        botaoEditar.classList.add('editar');

        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'apagar';
        botaoApagar.classList.add('apagar');

        div.appendChild(botaoEditar);
        div.appendChild(botaoApagar);
        lista.appendChild(div);
    }

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.querySelector('.texto-tarefa').textContent.trim();
            listaTarefas.push(tarefaTexto);
        }

        localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
    }

    function adicionaTarefasSalvas() {
        const tarefasSalvas = localStorage.getItem('tarefas');
        if (!tarefasSalvas) return;

        const lista = JSON.parse(tarefasSalvas);
        lista.forEach(t => criaTarefa(t));
    }

    function criaTarefa(text) {
        const li = criaLi();
        const spanText = document.createElement('span');

        spanText.classList.add('texto-tarefa');
        spanText.innerText = text;

        li.appendChild(spanText);
        criaBotoes(li);
        tarefas.appendChild(li);

        limpaInput();
        salvarTarefas();
    }

    function salvarEdicao(li, novoTexto) {
        if (!novoTexto.trim()) return;

        li.innerHTML = '';

        const span = document.createElement('span');
        span.classList.add('texto-tarefa');
        span.innerText = novoTexto.trim();

        li.appendChild(span);
        criaBotoes(li);
        salvarTarefas();
    }

    inputTarefa.addEventListener('keypress', function (e) {
        if (e.key === "Enter") {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });

    btnTarefa.addEventListener('click', function () {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('apagar')) {
            el.closest('li').remove();
            salvarTarefas();
        }

        if (el.classList.contains('editar')) {
            const li = el.closest('li');
            const spanTarefa = li.querySelector('.texto-tarefa');
            const textoAntigo = spanTarefa.innerText;

            li.innerHTML = '';

            const inputEdicao = document.createElement('input');
            inputEdicao.type = 'text';
            inputEdicao.value = textoAntigo;
            inputEdicao.classList.add('input-edicao');
            li.appendChild(inputEdicao);

            const botaoSalvar = document.createElement('button');
            botaoSalvar.innerText = 'Salvar';
            botaoSalvar.classList.add('salvar');
            li.appendChild(botaoSalvar);

            inputEdicao.focus();

            inputEdicao.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') salvarEdicao(li, inputEdicao.value);
            });

            botaoSalvar.addEventListener('click', function () {
                salvarEdicao(li, inputEdicao.value);
            });
        }
    });

    adicionaTarefasSalvas();
});