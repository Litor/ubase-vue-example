import service from './major.service';

export const state = {
  willDeleteWids: [],
  emapGrid: {
    pagePath: service.api.getList_meta,
    url: service.api.getList,
    action: service.api.getList_action,
    template: require('./cardTpl.html'),
    method: 'POST',
    customColumns: [{
      colField: 'status',
      type: 'tpl',
      width: 50,
      column: {
        cellsRenderer: function(row, column, value, rowData) {
          return value ? '有效' : '无效';
        }
      }
    }],
    checkable: true,
    sortable: true,
    columnsReorder: true,
    operations: {
      title: Vue.t('major.grid.opt_title'),
      width: 230,
      items: [{
        title: Vue.t('major.grid.opt_edit'),
        name: 'major:grid:edit',
        type: 'link'
      }, {
        title: Vue.t('major.grid.opt_detail'),
        name: 'major:grid:detail',
        type: 'link'
      }, {
        title: Vue.t('major.grid.opt_direction'),
        name: 'major:grid:direction',
        type: 'link'
      }]
    }
  }
};
