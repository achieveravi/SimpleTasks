/*
 * File: app/view/tasks/ReminderWindow.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SimpleTasks.view.tasks.ReminderWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.reminderWindow',

    border: false,
    frame: true,
    width: 400,
    title: 'My Window',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'component',
                    cls: 'tasks-reminder-details',
                    tpl: [
                        '<div class="tasks-reminder-icon"></div>',
                        '<p class="tasks-reminder-title">{title}</p>',
                        '<p class="tasks-reminder-due">Due: {due:date("F j, Y")}</p>'
                    ]
                },
                {
                    xtype: 'combobox',
                    margin: '10 0 10 20',
                    name: 'snooze_time',
                    value: '5',
                    fieldLabel: 'Remind me again in',
                    labelSeparator: '',
                    labelWidth: 115,
                    displayField: 'timeInWords',
                    store: 'ReminderTimes',
                    valueField: 'num'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'tbspacer'
                        },
                        {
                            xtype: 'button',
                            cls: 'snooze-btn',
                            text: 'Snooze'
                        },
                        {
                            xtype: 'button',
                            cls: 'dismiss-reminder-btn',
                            text: 'Dismiss'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    setTask: function(task) {
        this.task = task;
    },

    getTask: function() {
        return this.task;
    }

});