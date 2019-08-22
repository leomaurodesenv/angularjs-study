app.controller("listaTelefonicaCtrl", function ($scope, $filter) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Pedro", telefone: "(16) 99999-9991", 
            operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, data: new Date()},
        {nome: "Maria", telefone: "(16) 99999-9992", 
            operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
        {nome: "Lucas", telefone: "(16) 99999-9993"},
    ];
    $scope.contatos = $scope.contatos.map(function(e) { 
        e.nome = $filter('uppercase')(e.nome);
        return e;
    });

    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
        {nome: "Claro", codigo: 21, categoria: "Celular"},
        {nome: "GVT", codigo: 25, categoria: "Fixo"},
        {nome: "Embratel", codigo: 21, categoria: "Fixo"},
    ];
    $scope.addContato = function (contato) {
        // Mantra 1: Não ler o $scope dentro do controller, apenas escrever
        // Mantra 2: Utilizar os models para construir json.
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.delContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.criterioOrdenacao = 'nome';
    $scope.ordernarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});