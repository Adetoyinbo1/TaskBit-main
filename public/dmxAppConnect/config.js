dmx.config({
  "App": {
    "localStorage": [
      {
        "type": "text",
        "name": "Page_state"
      }
    ],
    "repeat1": {
      "meta": [
        {
          "name": "ChatText",
          "type": "text"
        },
        {
          "name": "Chat_Type",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "Creator",
          "type": "text"
        },
        {
          "name": "query_msg_attachments",
          "type": "array",
          "sub": [
            {
              "name": "FileUrl",
              "type": "text"
            },
            {
              "name": "FileName",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_new_tasks": {
      "meta": [
        {
          "name": "query",
          "type": "object",
          "sub": [
            {
              "name": "TaskTitle",
              "type": "text"
            },
            {
              "name": "DueDate",
              "type": "datetime"
            },
            {
              "name": "Type",
              "type": "text"
            },
            {
              "name": "AvatarUrl",
              "type": "text"
            },
            {
              "name": "Date_Created",
              "type": "datetime"
            },
            {
              "name": "Task_description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_assignedUsers_images": {
      "meta": [
        {
          "name": "ProcessTitle",
          "type": "text"
        },
        {
          "name": "Due_date",
          "type": "datetime"
        },
        {
          "name": "AssignedUserID",
          "type": "text"
        },
        {
          "name": "Completed",
          "type": "boolean"
        },
        {
          "name": "Notes",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeatTask": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "TaskTitle",
          "type": "text"
        },
        {
          "name": "DueDate",
          "type": "datetime"
        },
        {
          "name": "Type",
          "type": "text"
        },
        {
          "name": "AvatarUrl",
          "type": "text"
        },
        {
          "name": "CreatorID",
          "type": "text"
        },
        {
          "name": "Task_description",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "repeattask": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "TaskTitle",
          "type": "text"
        },
        {
          "name": "DueDate",
          "type": "datetime"
        },
        {
          "name": "Type",
          "type": "text"
        },
        {
          "name": "AvatarUrl",
          "type": "text"
        },
        {
          "name": "CreatorID",
          "type": "text"
        },
        {
          "name": "Task_description",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "offset",
          "type": "number"
        },
        {
          "name": "limit",
          "type": "number"
        },
        {
          "name": "total",
          "type": "number"
        },
        {
          "name": "page",
          "type": "object",
          "sub": [
            {
              "name": "offset",
              "type": "object",
              "sub": [
                {
                  "name": "first",
                  "type": "number"
                },
                {
                  "name": "prev",
                  "type": "number"
                },
                {
                  "name": "next",
                  "type": "number"
                },
                {
                  "name": "last",
                  "type": "number"
                }
              ]
            },
            {
              "name": "current",
              "type": "number"
            },
            {
              "name": "total",
              "type": "number"
            }
          ]
        },
        {
          "name": "data",
          "type": "array",
          "sub": [
            {
              "name": "imgUrl",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "repeat2": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "ProcessTitle",
          "type": "text"
        },
        {
          "name": "Due_date",
          "type": "datetime"
        },
        {
          "name": "Completed",
          "type": "boolean"
        },
        {
          "name": "Notes",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat": {
      "meta": null,
      "outputType": "text"
    },
    "repeat_Users": {
      "meta": [],
      "outputType": "array"
    },
    "repeat_users": {
      "meta": [
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Pasword",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "imgName",
          "type": "text"
        },
        {
          "name": "imgPath",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "Repeat_Users": {
      "meta": [
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "imgName",
          "type": "text"
        },
        {
          "name": "imgPath",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "User_detail": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgName",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "User_details": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgName",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "Each_returned_user": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Pasword",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgName",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "repeat_sub_tasks": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "TaskTitle",
          "type": "text"
        },
        {
          "name": "AvatarUrl",
          "type": "text"
        },
        {
          "name": "Task_description",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Department",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "Subtask_processeses",
          "type": "array",
          "sub": [
            {
              "name": "ProcessTitle",
              "type": "text"
            },
            {
              "name": "Due_date",
              "type": "datetime"
            },
            {
              "name": "AssignedUserID",
              "type": "text"
            },
            {
              "name": "Completed",
              "type": "boolean"
            },
            {
              "name": "Notes",
              "type": "text"
            },
            {
              "name": "FirstName",
              "type": "text"
            },
            {
              "name": "LastName",
              "type": "text"
            },
            {
              "name": "Role",
              "type": "text"
            },
            {
              "name": "imgUrl",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_direct_processes": {
      "meta": [
        {
          "name": "FileUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_processes_images": {
      "meta": [
        {
          "name": "ProcessTitle",
          "type": "text"
        },
        {
          "name": "Due_date",
          "type": "datetime"
        },
        {
          "name": "AssignedUserID",
          "type": "text"
        },
        {
          "name": "Completed",
          "type": "boolean"
        },
        {
          "name": "Notes",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_subtask_processes": {
      "meta": [
        {
          "name": "ProcessTitle",
          "type": "text"
        },
        {
          "name": "Due_date",
          "type": "datetime"
        },
        {
          "name": "AssignedUserID",
          "type": "text"
        },
        {
          "name": "Completed",
          "type": "boolean"
        },
        {
          "name": "Notes",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "Repeat_direct_chat_list": {
      "meta": [
        {
          "name": "ConversationId",
          "type": "text"
        },
        {
          "name": "query",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "FirstName",
              "type": "text"
            },
            {
              "name": "LastName",
              "type": "text"
            },
            {
              "name": "imgUrl",
              "type": "text"
            },
            {
              "name": "UserId",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_participants": {
      "meta": [
        {
          "name": "ParticipantsId",
          "type": "text"
        },
        {
          "name": "ConversationId",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_chat_participants": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_messages": {
      "meta": [
        {
          "name": "ChatText",
          "type": "text"
        },
        {
          "name": "Chat_Type",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "query_msg_attachments",
          "type": "array",
          "sub": [
            {
              "name": "FileUrl",
              "type": "text"
            },
            {
              "name": "FileName",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_attachments": {
      "meta": [
        {
          "name": "FileUrl",
          "type": "text"
        },
        {
          "name": "FileName",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_attachments2": {
      "meta": [
        {
          "name": "FileUrl",
          "type": "text"
        },
        {
          "name": "FileName",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_pinned_attachments": {
      "meta": [
        {
          "name": "FileUrl",
          "type": "text"
        },
        {
          "name": "FileName",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "data_repeat_return_query": {
      "meta": [
        {
          "name": "ChatText",
          "type": "text"
        },
        {
          "name": "FileUrl",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "ConversationId",
          "type": "text"
        },
        {
          "name": "Chat_Type",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "repeat_drect_chat_list_subquery": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "UserId",
          "type": "text"
        },
        {
          "name": "query_chats",
          "type": "object",
          "sub": [
            {
              "name": "ChatText",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_events": {
      "meta": [
        {
          "name": "EventId",
          "type": "text"
        },
        {
          "name": "query_event",
          "type": "object",
          "sub": [
            {
              "name": "id",
              "type": "text"
            }
          ]
        },
        {
          "name": "query_event_invites",
          "type": "array",
          "sub": [
            {
              "name": "imgUrl",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_invites_imgs": {
      "meta": [
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_reminders": {
      "meta": [
        {
          "name": "Description",
          "type": "text"
        },
        {
          "name": "RemiderTitle",
          "type": "text"
        },
        {
          "name": "Date",
          "type": "datetime"
        },
        {
          "name": "ReminderType",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "flow1": [
      {
        "name": "sc",
        "type": "object",
        "sub": [
          {
            "name": "data",
            "type": "object",
            "sub": [
              {
                "name": "identity",
                "type": "text",
                "sub": []
              },
              {
                "name": "query_CurrentUser_participant",
                "type": "array",
                "sub": [
                  {
                    "name": "ConversationId",
                    "type": "text"
                  }
                ]
              },
              {
                "name": "repeat_currentUser",
                "type": "array",
                "sub": [
                  {
                    "name": "ConversationId",
                    "type": "text"
                  },
                  {
                    "name": "query",
                    "type": "array",
                    "sub": [
                      {
                        "name": "id",
                        "type": "text"
                      },
                      {
                        "name": "FirstName",
                        "type": "text"
                      },
                      {
                        "name": "LastName",
                        "type": "text"
                      },
                      {
                        "name": "imgUrl",
                        "type": "text"
                      },
                      {
                        "name": "UserId",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "name": "repeat_query",
                    "type": "array",
                    "sub": [
                      {
                        "name": "id",
                        "type": "text"
                      },
                      {
                        "name": "FirstName",
                        "type": "text"
                      },
                      {
                        "name": "LastName",
                        "type": "text"
                      },
                      {
                        "name": "imgUrl",
                        "type": "text"
                      },
                      {
                        "name": "UserId",
                        "type": "text"
                      },
                      {
                        "name": "query_chats",
                        "type": "object",
                        "sub": [
                          {
                            "name": "ChatText",
                            "type": "text"
                          },
                          {
                            "name": "Chat_Type",
                            "type": "text"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "state",
            "type": "object",
            "sub": [
              {
                "name": "executing",
                "type": "boolean"
              },
              {
                "name": "uploading",
                "type": "boolean"
              },
              {
                "name": "processing",
                "type": "boolean"
              },
              {
                "name": "downloading",
                "type": "boolean"
              }
            ]
          },
          {
            "name": "uploadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "downloadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "lastError",
            "type": "object",
            "sub": [
              {
                "name": "status",
                "type": "number"
              },
              {
                "name": "message",
                "type": "text"
              },
              {
                "name": "response",
                "type": "text"
              }
            ]
          },
          {
            "name": "status",
            "type": "number"
          }
        ]
      }
    ],
    "repeat_process_conversation_list": {
      "meta": [
        {
          "name": "ConversationId",
          "type": "text"
        },
        {
          "name": "query",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat_query",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "query_chats",
              "type": "object",
              "sub": [
                {
                  "name": "ChatText",
                  "type": "text"
                },
                {
                  "name": "Chat_Type",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_3_participant_img": {
      "meta": [
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "arr1": {
      "meta": [
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "UserId",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_task_conversation_list": {
      "meta": [
        {
          "name": "ConversationId",
          "type": "text"
        },
        {
          "name": "query",
          "type": "object",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "imgUrl",
              "type": "text"
            },
            {
              "name": "ProcessTitle",
              "type": "text"
            }
          ]
        },
        {
          "name": "query_participants",
          "type": "array",
          "sub": [
            {
              "name": "imgUrl",
              "type": "text"
            }
          ]
        },
        {
          "name": "query_chats",
          "type": "object",
          "sub": [
            {
              "name": "ChatText",
              "type": "text"
            },
            {
              "name": "Chat_Type",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_my_tasks": {
      "meta": [
        {
          "name": "TaskId",
          "type": "text"
        },
        {
          "name": "TaskTitle",
          "type": "text"
        },
        {
          "name": "AvatarUrl",
          "type": "text"
        },
        {
          "name": "Final_date",
          "type": "datetime"
        },
        {
          "name": "Completed",
          "type": "boolean"
        }
      ],
      "outputType": "array"
    },
    "repeat_user_current_chat_pins": {
      "meta": [
        {
          "name": "Msg_id",
          "type": "text"
        },
        {
          "name": "query_messages",
          "type": "object",
          "sub": [
            {
              "name": "ChatText",
              "type": "text"
            },
            {
              "name": "Chat_Type",
              "type": "text"
            },
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "FirstName",
              "type": "text"
            },
            {
              "name": "LastName",
              "type": "text"
            }
          ]
        },
        {
          "name": "query_messages_attachments",
          "type": "array",
          "sub": [
            {
              "name": "FileName",
              "type": "text"
            },
            {
              "name": "FileUrl",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat_pins_attahments": {
      "meta": [
        {
          "name": "FileName",
          "type": "text"
        },
        {
          "name": "FileUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "repeat_all_tasks": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "TaskTitle",
          "type": "text"
        },
        {
          "name": "Final_date",
          "type": "datetime"
        },
        {
          "name": "AvatarUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "direct_users_flow": [
      {
        "name": "sc",
        "type": "object",
        "sub": [
          {
            "name": "data",
            "type": "object",
            "sub": [
              {
                "name": "identity",
                "type": "text",
                "sub": []
              },
              {
                "name": "query_CurrentUser_participant",
                "type": "array",
                "sub": [
                  {
                    "name": "ConversationId",
                    "type": "text"
                  }
                ]
              },
              {
                "name": "repeat_currentUser",
                "type": "array",
                "sub": [
                  {
                    "name": "ConversationId",
                    "type": "text"
                  },
                  {
                    "name": "query",
                    "type": "array",
                    "sub": [
                      {
                        "name": "id",
                        "type": "text"
                      },
                      {
                        "name": "FirstName",
                        "type": "text"
                      },
                      {
                        "name": "LastName",
                        "type": "text"
                      },
                      {
                        "name": "imgUrl",
                        "type": "text"
                      },
                      {
                        "name": "UserId",
                        "type": "text"
                      }
                    ]
                  },
                  {
                    "name": "repeat_query",
                    "type": "array",
                    "sub": [
                      {
                        "name": "id",
                        "type": "text"
                      },
                      {
                        "name": "FirstName",
                        "type": "text"
                      },
                      {
                        "name": "LastName",
                        "type": "text"
                      },
                      {
                        "name": "imgUrl",
                        "type": "text"
                      },
                      {
                        "name": "UserId",
                        "type": "text"
                      },
                      {
                        "name": "query_chats",
                        "type": "object",
                        "sub": [
                          {
                            "name": "ChatText",
                            "type": "text"
                          },
                          {
                            "name": "Chat_Type",
                            "type": "text"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "state",
            "type": "object",
            "sub": [
              {
                "name": "executing",
                "type": "boolean"
              },
              {
                "name": "uploading",
                "type": "boolean"
              },
              {
                "name": "processing",
                "type": "boolean"
              },
              {
                "name": "downloading",
                "type": "boolean"
              }
            ]
          },
          {
            "name": "uploadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "downloadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "lastError",
            "type": "object",
            "sub": [
              {
                "name": "status",
                "type": "number"
              },
              {
                "name": "message",
                "type": "text"
              },
              {
                "name": "response",
                "type": "text"
              }
            ]
          },
          {
            "name": "status",
            "type": "number"
          }
        ]
      },
      {
        "name": "repeat_user_list",
        "type": "array",
        "sub": [
          {
            "name": "$index",
            "type": "number"
          },
          {
            "name": "$number",
            "type": "number"
          },
          {
            "name": "$name",
            "type": "text"
          },
          {
            "name": "$value",
            "type": "object"
          },
          {
            "name": "id",
            "type": "text"
          },
          {
            "name": "FirstName",
            "type": "text"
          },
          {
            "name": "LastName",
            "type": "text"
          },
          {
            "name": "imgUrl",
            "type": "text"
          },
          {
            "name": "UserId",
            "type": "text"
          },
          {
            "name": "query_chats",
            "type": "object",
            "sub": [
              {
                "name": "ChatText",
                "type": "text"
              },
              {
                "name": "Chat_Type",
                "type": "text"
              }
            ]
          }
        ]
      },
      {
        "name": "repeat_chat_list",
        "type": "array",
        "sub": [
          {
            "name": "$index",
            "type": "number"
          },
          {
            "name": "$number",
            "type": "number"
          },
          {
            "name": "$name",
            "type": "text"
          },
          {
            "name": "$value",
            "type": "object"
          },
          {
            "name": "ConversationId",
            "type": "text"
          },
          {
            "name": "query",
            "type": "array",
            "sub": [
              {
                "name": "id",
                "type": "text"
              },
              {
                "name": "FirstName",
                "type": "text"
              },
              {
                "name": "LastName",
                "type": "text"
              },
              {
                "name": "imgUrl",
                "type": "text"
              },
              {
                "name": "UserId",
                "type": "text"
              }
            ]
          },
          {
            "name": "repeat_query",
            "type": "array",
            "sub": [
              {
                "name": "id",
                "type": "text"
              },
              {
                "name": "FirstName",
                "type": "text"
              },
              {
                "name": "LastName",
                "type": "text"
              },
              {
                "name": "imgUrl",
                "type": "text"
              },
              {
                "name": "UserId",
                "type": "text"
              },
              {
                "name": "query_chats",
                "type": "object",
                "sub": [
                  {
                    "name": "ChatText",
                    "type": "text"
                  },
                  {
                    "name": "Chat_Type",
                    "type": "text"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "Task_chat_users_flow": [
      {
        "name": "sc",
        "type": "object",
        "sub": [
          {
            "name": "data",
            "type": "object",
            "sub": [
              {
                "name": "query_participants",
                "type": "array",
                "sub": [
                  {
                    "name": "FirstName",
                    "type": "text"
                  },
                  {
                    "name": "LastName",
                    "type": "text"
                  },
                  {
                    "name": "imgUrl",
                    "type": "text"
                  },
                  {
                    "name": "UserId",
                    "type": "text"
                  }
                ]
              }
            ]
          },
          {
            "name": "state",
            "type": "object",
            "sub": [
              {
                "name": "executing",
                "type": "boolean"
              },
              {
                "name": "uploading",
                "type": "boolean"
              },
              {
                "name": "processing",
                "type": "boolean"
              },
              {
                "name": "downloading",
                "type": "boolean"
              }
            ]
          },
          {
            "name": "uploadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "downloadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "lastError",
            "type": "object",
            "sub": [
              {
                "name": "status",
                "type": "number"
              },
              {
                "name": "message",
                "type": "text"
              },
              {
                "name": "response",
                "type": "text"
              }
            ]
          },
          {
            "name": "status",
            "type": "number"
          }
        ]
      },
      {
        "name": "repeat",
        "type": "array",
        "sub": [
          {
            "name": "$index",
            "type": "number"
          },
          {
            "name": "$number",
            "type": "number"
          },
          {
            "name": "$name",
            "type": "text"
          },
          {
            "name": "$value",
            "type": "object"
          },
          {
            "name": "FirstName",
            "type": "text"
          },
          {
            "name": "LastName",
            "type": "text"
          },
          {
            "name": "imgUrl",
            "type": "text"
          },
          {
            "name": "UserId",
            "type": "text"
          }
        ]
      }
    ]
  },
  "AppTemplate": {
    "sessionStorage": [
      {
        "type": "array",
        "name": "taskid"
      }
    ],
    "tableRepeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "TaskTitle",
          "type": "text"
        },
        {
          "name": "DueDate",
          "type": "datetime"
        },
        {
          "name": "Type",
          "type": "text"
        },
        {
          "name": "AvatarUrl",
          "type": "text"
        },
        {
          "name": "CreatorID",
          "type": "text"
        },
        {
          "name": "Task_description",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Pasword",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgUrl",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "User_details": {
      "meta": [
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgName",
          "type": "text"
        },
        {
          "name": "Pasword",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "var1": {
      "meta": null,
      "outputType": "text"
    },
    "Company_id": {
      "meta": null,
      "outputType": "text"
    },
    "cookies": [
      {
        "type": "object",
        "name": "object",
        "sub": [
          {
            "type": "key_array",
            "name": "task_ids",
            "sub": [
              {
                "type": "number",
                "name": "id"
              }
            ]
          }
        ]
      }
    ],
    "Repeat_Users": {
      "meta": [
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "FirstName",
          "type": "text"
        },
        {
          "name": "LastName",
          "type": "text"
        },
        {
          "name": "Email",
          "type": "text"
        },
        {
          "name": "Role",
          "type": "text"
        },
        {
          "name": "Create_Update_team_Tasks",
          "type": "boolean"
        },
        {
          "name": "Create_Update_team_Events",
          "type": "boolean"
        },
        {
          "name": "Account_settings_and_subscription",
          "type": "boolean"
        },
        {
          "name": "Company_founder",
          "type": "boolean"
        },
        {
          "name": "imgUrl",
          "type": "text"
        },
        {
          "name": "imgName",
          "type": "text"
        },
        {
          "name": "imgPath",
          "type": "text"
        },
        {
          "name": "id",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "Dm_userId": {
      "meta": null,
      "outputType": "text"
    },
    "repeat_notifications": {
      "meta": [
        {
          "name": "creatorImg",
          "type": "text"
        },
        {
          "name": "Notification_text",
          "type": "text"
        },
        {
          "name": "Conversationi_id",
          "type": "text"
        },
        {
          "name": "Task_id",
          "type": "text"
        },
        {
          "name": "Reminder_id",
          "type": "text"
        },
        {
          "name": "Event_id",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "playground": {
    "repeat1": {
      "meta": [
        {
          "name": "TaskTitle",
          "type": "text"
        },
        {
          "name": "Task_description",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  }
});
