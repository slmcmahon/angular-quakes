function QuakeDetailController($scope, $element, $attrs) {
    var ctrl = this;
}

app.component('quakeDetail', {
    templateUrl: 'app/views/quakeDetailView.html',
    controller: QuakeDetailController,
    bindings: {
        quake: '<'
    }
});