/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'SimpleTasks.ux': 'app/ux',
        'Ext.ux': 'ux'
    }
});


Ext.application({

    requires: [
        'Ext.Loader'
    ],
    models: [
        'List',
        'Task'
    ],
    stores: [
        'ReminderTimes',
        'Lists',
        'Tasks'
    ],
    views: [
        'lists.ContextMenu',
        'lists.Tree',
        'tasks.ContextMenu',
        'tasks.DefaultTimeWindow',
        'tasks.EditWindow',
        'tasks.Form',
        'tasks.ReminderWindow',
        'Toolbar',
        'SimpleTasksViewport',
        'tasks.Fields'
    ],
    controllers: [
        'Lists',
        'Tasks'
    ],
    name: 'SimpleTasks',

    launch: function() {
        Ext.create('SimpleTasks.view.SimpleTasksViewport');
        SimpleTasksSettings = {
            // This property is used to turn on local storage.  If set to false the php backend will be used.
            // For the purpose of this sample app, only local storage is used.
            useLocalStorage: true
        };
    }

});
