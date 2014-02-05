Ext.onReady(function() {

/*
	var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'menu.xml',
            extraParams: {
                isXml: true
            },
            reader: {
                type: 'xml',
                root: 'nodes',
                record: 'node'
            }
        },
        sorters: [
        	{ property: 'leaf', direction: 'ASC' },
        	{ property: 'text', direction: 'ASC' }
        ],    
        root: {
            text: 'Ext JS',
            id: 'src',
            expanded: true            
        }
    });
*/

/*
    var store = Ext.create('Ext.data.TreeStore', {
   	    root: {
        expanded: true,
        children: [
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, 
                children: [
                    { text: "book report", leaf: true, url: "index_test.html", id : "test1"},
                    { text: "algebra", leaf: true, url: "index_test.html", id : "test2"}
                ]
            },
            { text: "buy lottery tickets", leaf: true }
        ]
        }
	});
*/
/*
    var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'menu.json',
            extraParams: {
                isXml: true
            }
        },
        sorters: [
        	{ property: 'leaf', direction: 'ASC' },
        	{ property: 'text', direction: 'ASC' }
        ],    
        fields : [
        	{ name : 'url', mapping : 'url'},
        	{ name : 'text', mapping : 'text' },
        	{ name : 'id', mapping : 'id' }        
        ],
        root: {
            text: 'HMART Back Office',
            id: 'src',
            expanded: true            
        }
    });
*/
	
	var nav1Store = Ext.create('Ext.data.TreeStore', {		
	    proxy: {
	        type: 'ajax',
	        url : 'menu.json',
	        reader : {
	        	type:'json'
	        },        
	    },
	    //folderSort: true,
	    autoLoad : true    
	});
	
	var nav2Store = Ext.create('Ext.data.TreeStore', {		
	    proxy: {
	        type: 'ajax',
	        url : 'menu.json',
	        reader : {
	        	type:'json'
	        },        
	    },
	    //folderSort: true,
	    autoLoad : true    
	});

	Ext.create('Ext.container.Viewport', {
		layout : 'border',
		resizable : false,
		items : [
			{
				region : 'center',
				id : 'center-panel',
				xtype : 'panel', // TabPanel itself has no title
				border : true,
				autoScroll : true,
				scope : this					
			}, {
				region : 'north',
				border : true,
				layout : {
					type : 'border'
				},
				height : 145,
				collapsible : false,
				split : true,
				minHeight : 145,
				maxHeight : 145,
				items : [{
					region : 'west',
					collapsible : false,
					split : true,
					minWidth : 230,
					maxWidth : 230,
					items : [{
						xtype : 'form',
						title : 'Log in',
						width : 230,
						items : [
							{
								xtype : 'textfield',
								fieldLabel : 'USER NAME',
								name : 'user-name',
								padding : 5
							}, {
								xtype : 'textfield',
								fieldLabel : 'PASSWORD',
								name : 'password-name',
								padding : 5
							}
						],
						buttons : [{
							text : 'Submit',
							handler : function() {
								dynamicPanel = new Ext.Component({
									loader: {
										url: 'index_test2.html',
										renderer: 'html',
										autoLoad: true,
										scripts: true
									}
								});
								Ext.getCmp('center-panel').removeAll();
								Ext.getCmp('center-panel').add(dynamicPanel);  
																
							}
						}]
					}]
				}, {
					region : 'center',
					html : '<font color="black"><h1 class="x-panel-header">&nbsp;HMART Business Intergration</h1></font>',
					collapsible : false,
					split : true
				}]

			}, {
				id : 'west-panel',
				region : 'west',
				layout : {
					type : 'accordion',
					animate : true,
					activeOnTop : true
				},
				split : true,
				width : 230,
				items: [
					{
		            	xtype : 'treepanel',
				    	id : 'tree-menu1',
				    	title : 'Navigation Menu 1',
				        store: nav1Store,
				        rootVisible: false,
				        collapsible: true,
				        listeners : {
				        	itemclick: function(view, record) {
				        		var dynamicPanel = new Ext.Component({
									loader: {
										id : record.raw.id,
										url: record.raw.url,
										renderer: 'html',
										autoLoad: true,
										scripts: true
									}
								});
								Ext.getCmp('center-panel').removeAll();
								Ext.getCmp('center-panel').add(dynamicPanel);				        	
				        	}
				       }
		            }, {
		            	xtype : 'treepanel',
				    	id : 'tree-menu2',
				    	title : 'Navigation Menu 2',
				        store: nav2Store,
				        rootVisible: false,
				        collapsible: true,
				        listeners : {
				        	itemclick: function(view, record) {
				        		var dynamicPanel = new Ext.Component({
									loader: {
										id : record.raw.id,
										url: record.raw.url,
										renderer: 'html',
										autoLoad: true,
										scripts: true
									}
								});
								Ext.getCmp('center-panel').removeAll();
								Ext.getCmp('center-panel').add(dynamicPanel);				        	
				        	}
				       }
		            }, {
		            	xtype : 'treepanel',
				    	id : 'tree-menu3',
				    	title : 'Navigation Menu 3',
				        store: nav2Store,
				        rootVisible: false,
				        collapsible: true,
				        listeners : {
				        	itemclick: function(view, record) {
				        		var dynamicPanel = new Ext.Component({
									loader: {
										id : record.raw.id,
										url: record.raw.url,
										renderer: 'html',
										autoLoad: true,
										scripts: true
									}
								});
								Ext.getCmp('center-panel').removeAll();
								Ext.getCmp('center-panel').add(dynamicPanel);				        	
				        	}
				       }
		            }
				]
			}, {
				region : 'south',
				title : 'Direction Message',
				collapsible : true,
				html : 'Information goes here',
				split : true,
				maxHeight : 100,
				minHeight : 100
			}, {
				region : 'east',
				title : 'East Panel',
				collapsible : false,
				split : false,
				width : 0
			}
		],
		listeners : {
			afterrender : function() {
					var dynamicPanel = new Ext.Component({
						loader: {
							url: 'index_test.html',
							renderer: 'html',
							autoLoad: true,
							scripts: true
						}
					});
					Ext.getCmp('center-panel').add(dynamicPanel);
			}
		}
	});
});