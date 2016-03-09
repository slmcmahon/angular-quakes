function QuakeListController($scope, $element, $attrs) {
    var ctrl = this;
}

app.component('quakeList', {
    templateUrl: 'app/views/quakeListView.html',
    controller: QuakeListController,
    bindings: {
        list: '<'
    }
});