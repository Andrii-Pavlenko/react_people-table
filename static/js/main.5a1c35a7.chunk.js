(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,r){e.exports=r(261)},261:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(27),o=r.n(l),c=r(38),u=r.n(c),s=r(18),i=r(58),p=r(32),m=r(33),f=r(34),d=r(36),h=r(37),b=r(267),C=function(){var e=Object(i.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=r(268),g=(r(64),r(4)),w=r.n(g);var y=function(e){var t=e.person,r=e.index,n=e.selector,l=e.props,o="m"===t.sex?"Person--male":"Person--female",c=+t.born<=1650?"classAge":"",u=t.age>=65&&"age";return a.a.createElement(E.a.Row,{className:w()("Person",t.selected&&"Person--selected","Person--lived-in-".concat(t.century)),active:l.selected===r,onClick:function(){return n(r)}},a.a.createElement(E.a.Cell,null,t.id),a.a.createElement(E.a.Cell,{className:c},t.name),a.a.createElement(E.a.Cell,{className:o},t.sex),a.a.createElement(E.a.Cell,null,t.born),a.a.createElement(E.a.Cell,null,t.died),a.a.createElement(E.a.Cell,{className:u},t.age),a.a.createElement(E.a.Cell,null,t.century),a.a.createElement(E.a.Cell,null,t.mother),a.a.createElement(E.a.Cell,null,t.father))};var k=function(e){var t=e.people,r=e.selector,n=e.props;return a.a.createElement(E.a,{celled:!0,className:"PeopleTable"},a.a.createElement("thead",null,a.a.createElement(E.a.Row,null,a.a.createElement(E.a.HeaderCell,null,"id"),a.a.createElement(E.a.HeaderCell,null,"name"),a.a.createElement(E.a.HeaderCell,null,"sex"),a.a.createElement(E.a.HeaderCell,null,"born"),a.a.createElement(E.a.HeaderCell,null,"died"),a.a.createElement(E.a.HeaderCell,null,"age"),a.a.createElement(E.a.HeaderCell,null,"century"),a.a.createElement(E.a.HeaderCell,null,"mother"),a.a.createElement(E.a.HeaderCell,null,"father"))),a.a.createElement("tbody",null,t.map(function(e,t){return a.a.createElement(y,{person:e,index:t,key:e.id,selector:r,props:n})})))},v=r(262);var O=function(e){var t=e.sorter;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{onClick:function(){return t("Name")},color:"blue"},"Name"),a.a.createElement(v.a,{onClick:function(){return t("Mother")},color:"blue"},"Mother"),a.a.createElement(v.a,{onClick:function(){return t("Father")},color:"blue"},"Father"),a.a.createElement(v.a,{onClick:function(){return t("Id")}},"Id"),a.a.createElement(v.a,{onClick:function(){return t("Sex")}},"Sex"),a.a.createElement(v.a,{onClick:function(){return t("Born")}},"Born"),a.a.createElement(v.a,{onClick:function(){return t("Died")}},"Died"),a.a.createElement(v.a,{onClick:function(){return t("Age")}},"Age"),a.a.createElement(v.a,{onClick:function(){return t("Century")}},"Century"))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var P=function(e){function t(e){var r;return Object(p.a)(this,t),(r=Object(f.a)(this,Object(d.a)(t).call(this,e))).getData=Object(i.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,r.setState({people:t.map(function(e,t){return x({},e,{id:t+1,age:+e.died-+e.born,century:Math.ceil(e.died/100)})})});case 4:case"end":return e.stop()}},e)})),r.selector=function(e){r.setState(function(t){return x({},t,{selected:e})})},r.handleChangeFilter=function(e){r.setState({filtered:e.target.value})},r.sorter=function(e){var t;switch(e){case"Name":t=r.state.people.filter(function(e){return e.name?e.name.toLowerCase().includes(r.state.filtered.toLowerCase()):""}).sort(function(e,t){return e.name.localeCompare(t.name)});break;case"Mother":t=r.state.people.filter(function(e){return e.mother?e.mother.toLowerCase().includes(r.state.filtered.toLowerCase()):""}).sort(function(e,t){return e.mother.localeCompare(t.mother)});break;case"Father":t=r.state.people.filter(function(e){return e.father?e.father.toLowerCase().includes(r.state.filtered.toLowerCase()):""}).sort(function(e,t){return e.father.localeCompare(t.father)});break;case"Id":t=r.state.people.sort(function(e,t){return e.id-t.id});break;case"Sex":t=r.state.people.sort(function(e,t){return e.sex.localeCompare(t.sex)});break;case"Born":t=r.state.people.sort(function(e,t){return e.born-t.born});break;case"Died":t=r.state.people.sort(function(e,t){return e.died-t.died});break;case"Age":t=r.state.people.sort(function(e,t){return e.age-t.age});break;case"Century":t=r.state.people.sort(function(e,t){return e.century-t.century});break;default:t=r.state.people}r.setState(function(e){return x({},e,{peopleToShow:t})})},r.state={people:[],peopleToShow:null,selected:null,filtered:""},r}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.people,r=e.peopleToShow;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"People table"),a.a.createElement("p",null,t.length-1,"people found;"),a.a.createElement(b.a,{type:"text",placeholder:"To filter!",onChange:this.handleChangeFilter,value:this.state.filtered}),a.a.createElement(O,{sorter:this.sorter}),a.a.createElement(k,{people:r||t,selector:this.selector,props:this.state}))}}]),t}(a.a.Component);o.a.render(a.a.createElement(P,{test:123}),document.getElementById("root"))},64:function(e,t,r){}},[[136,1,2]]]);
//# sourceMappingURL=main.5a1c35a7.chunk.js.map