var React = require('react');
var moment = require('moment');
var cssify = require('cssify');

var Graph = React.createClass({
	render: function() {
		var graph = [];
		var row = [];
		var days_week = [];
		var days_in_month = moment().daysInMonth();

		for (var i = 0; i <= days_in_month; i++) {
			if (i < 7) {
				days_week.push(<div className="col-md-1" style={{margin: '5px'}}>{moment().date(i).format("dd")}</div>)
			}

			if (i === 0) {
				var first_day = moment().date(1).day();
				for (var j = 0; j < first_day; j++) {
					row.push(
						<div className="col-md-1">
							<div style={{marginTop: '100%'}}></div>
							<div style={{position: 'absolute', margin: '5px', background: 'red', top: '0', bottom: '0', left: '0', right: '0'}}></div>
						</div>
					)
				}
				continue;
			}

			if (i > 0 && i % 7 === 0) {
				graph.push(<div className="row">{row}</div>);
				row = [];
			}

			row.push(<div className="col-md-1">
							<div style={{marginTop: '100%'}}></div>
							<div style={{position: 'absolute', margin: '5px', background: '#eee', top: '0', bottom: '0', left: '0', right: '0'}}>{i}</div>
					</div>)
		}
		graph.push(<div className="row">{row}</div>)
		return (
			<div>
				<div className="row">{days_week}</div>
				{graph}
			</div>
		)
	}
});

var contribution_graph = function() {
	cssify.byUrl('//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/css/bootstrap.min.css');
}

contribution_graph.prototype.render = function(id) {
	React.render(
		<Graph />,
		document.getElementById(id)
	);
}

module.exports = new contribution_graph();