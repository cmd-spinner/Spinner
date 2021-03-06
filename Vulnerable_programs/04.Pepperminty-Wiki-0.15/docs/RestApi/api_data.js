define({ "api": [
  {
    "type": "post",
    "url": "?action=checklogin",
    "title": "Perform a login",
    "name": "CheckLogin",
    "group": "Authorisation",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>The user name to login with.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>The password to login with.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "returnto",
            "description": "<p>The URL to redirect to upon a successful login.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentialsError",
            "description": "<p>The supplied credentials were invalid. Note that this error is actually a redirect to ?action=login&amp;failed=yes (with the returnto parameter appended if you supplied one)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-login.php.txt",
    "groupTitle": "Authorisation"
  },
  {
    "type": "post",
    "url": "?action=checklogin",
    "title": "Perform a login",
    "name": "CheckLogin",
    "group": "Authorisation",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>The user name to login with.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>The password to login with.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "returnto",
            "description": "<p>The URL to redirect to upon a successful login.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentialsError",
            "description": "<p>The supplied credentials were invalid. Note that this error is actually a redirect to ?action=login&amp;failed=yes (with the returnto parameter appended if you supplied one)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-login.php",
    "groupTitle": "Authorisation"
  },
  {
    "type": "get",
    "url": "?action=login[&failed=yes][&returnto={someUrl}]",
    "title": "Get the login page",
    "name": "Login",
    "group": "Authorisation",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "failed",
            "description": "<p>Setting to yes causes a login failure message to be displayed above the login form.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "returnto",
            "description": "<p>Set to the url to redirect to upon a successful login.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-login.php.txt",
    "groupTitle": "Authorisation"
  },
  {
    "type": "get",
    "url": "?action=login[&failed=yes][&returnto={someUrl}]",
    "title": "Get the login page",
    "name": "Login",
    "group": "Authorisation",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "failed",
            "description": "<p>Setting to yes causes a login failure message to be displayed above the login form.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "returnto",
            "description": "<p>Set to the url to redirect to upon a successful login.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-login.php",
    "groupTitle": "Authorisation"
  },
  {
    "type": "post",
    "url": "?action=logout",
    "title": "Logout",
    "description": "<p>Logout. Make sure that your bot requests this URL when it is finished - this call not only clears your cookies but also clears the server's session file as well. Note that you can request this when you are already logged out and it will completely wipe your session on the server.</p>",
    "name": "Logout",
    "group": "Authorisation",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-logout.php.txt",
    "groupTitle": "Authorisation"
  },
  {
    "type": "post",
    "url": "?action=logout",
    "title": "Logout",
    "description": "<p>Logout. Make sure that your bot requests this URL when it is finished - this call not only clears your cookies but also clears the server's session file as well. Note that you can request this when you are already logged out and it will completely wipe your session on the server.</p>",
    "name": "Logout",
    "group": "Authorisation",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/page-logout.php",
    "groupTitle": "Authorisation"
  },
  {
    "type": "post",
    "url": "?action=comment",
    "title": "Comment on a page",
    "name": "Comment",
    "group": "Comment",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "description": "<p>Posts a comment on a page, optionally in reply to another comment. Currently, comments must be made by a logged-in user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The comment text. Supports the same syntax that the renderer of the main page supports. The default is extended markdown - see the help page of the specific wiki for more information.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "replyto",
            "description": "<p>Optional. If specified the comment will be posted in reply to the comment with the specified id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The comment to reply to was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-comments.php",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "?action=comment",
    "title": "Comment on a page",
    "name": "Comment",
    "group": "Comment",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "description": "<p>Posts a comment on a page, optionally in reply to another comment. Currently, comments must be made by a logged-in user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The comment text. Supports the same syntax that the renderer of the main page supports. The default is extended markdown - see the help page of the specific wiki for more information.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "replyto",
            "description": "<p>Optional. If specified the comment will be posted in reply to the comment with the specified id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The comment to reply to was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-comments.php.txt",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "?action=comment-delete&page={page_name}&delete_id={id_to_delete}",
    "title": "Delete a comment",
    "name": "CommentDelete",
    "group": "Comment",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "description": "<p>Deletes a comment with the specified id. If you aren't the one who made the comment in the first place, then you must be a moderator or better to delete it.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "delete_id",
            "description": "<p>The id of the comment to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The comment to delete was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-comments.php.txt",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "?action=comment-delete&page={page_name}&delete_id={id_to_delete}",
    "title": "Delete a comment",
    "name": "CommentDelete",
    "group": "Comment",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "description": "<p>Deletes a comment with the specified id. If you aren't the one who made the comment in the first place, then you must be a moderator or better to delete it.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "delete_id",
            "description": "<p>The id of the comment to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The comment to delete was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-comments.php",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "?action=delete",
    "title": "Delete a page",
    "description": "<p>Delete a page and all its associated data.</p>",
    "name": "DeletePage",
    "group": "Page",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The name of the page to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "delete",
            "description": "<p>Set to 'yes' to actually delete the page.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PageNonExistentError",
            "description": "<p>The specified page doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-delete.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "?action=delete",
    "title": "Delete a page",
    "description": "<p>Delete a page and all its associated data.</p>",
    "name": "DeletePage",
    "group": "Page",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The name of the page to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "delete",
            "description": "<p>Set to 'yes' to actually delete the page.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PageNonExistentError",
            "description": "<p>The specified page doesn't exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-delete.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=edit&page={pageName}[&newpage=yes]",
    "title": "Get an editing page",
    "description": "<p>Gets an editing page for a given page. If you don't have permission to edit the page in question, a view source pagee is returned instead.</p>",
    "name": "EditPage",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newpage",
            "description": "<p>Set to 'yes' if a new page is being created. Only affects a few bits of text here and there, and the HTTP response code recieved on success from the <code>save</code> action.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-edit.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=edit&page={pageName}[&newpage=yes]",
    "title": "Get an editing page",
    "description": "<p>Gets an editing page for a given page. If you don't have permission to edit the page in question, a view source pagee is returned instead.</p>",
    "name": "EditPage",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newpage",
            "description": "<p>Set to 'yes' if a new page is being created. Only affects a few bits of text here and there, and the HTTP response code recieved on success from the <code>save</code> action.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-edit.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "?action=save&page={pageName}",
    "title": "Save an edit to a page.",
    "description": "<p>Saves an edit to a page. If an edit conflict is encountered, then a conflict resolution page is returned instead.</p>",
    "name": "EditPage",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newpage",
            "description": "<p>GET only. Set to 'yes' to indicate that this is a new page that is being saved. Only affects the HTTP response code you recieve upon success.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>POST only. The new content to save to the given filename.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tags",
            "description": "<p>POST only. A comma-separated list of tags to assign to the current page. Will replace the existing list of tags, if any are present.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "prev-content-hash",
            "description": "<p>POST only. The hash of the original content before editing. If this hash is found to be different to a hash computed of the currentl saved content, a conflict resolution page will be returned instead of saving the provided content.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnsufficientPermissionError",
            "description": "<p>You don't currently have sufficient permissions to save an edit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-edit.php",
    "groupTitle": "Page"
  },
  {
    "type": "post",
    "url": "?action=save&page={pageName}",
    "title": "Save an edit to a page.",
    "description": "<p>Saves an edit to a page. If an edit conflict is encountered, then a conflict resolution page is returned instead.</p>",
    "name": "EditPage",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newpage",
            "description": "<p>GET only. Set to 'yes' to indicate that this is a new page that is being saved. Only affects the HTTP response code you recieve upon success.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>POST only. The new content to save to the given filename.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tags",
            "description": "<p>POST only. A comma-separated list of tags to assign to the current page. Will replace the existing list of tags, if any are present.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "prev-content-hash",
            "description": "<p>POST only. The hash of the original content before editing. If this hash is found to be different to a hash computed of the currentl saved content, a conflict resolution page will be returned instead of saving the provided content.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnsufficientPermissionError",
            "description": "<p>You don't currently have sufficient permissions to save an edit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-edit.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=history&page={pageName}",
    "title": "Get a list of revisions for a page",
    "name": "History",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page name to return a revision list for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "format",
            "description": "<p>The format to return the list of pages in. available values: html, json, text. Default: html</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-history.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=history&page={pageName}",
    "title": "Get a list of revisions for a page",
    "name": "History",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page name to return a revision list for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "format",
            "description": "<p>The format to return the list of pages in. available values: html, json, text. Default: html</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-history.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=list",
    "title": "List all pages",
    "description": "<p>Gets a list of all the pages currently stored on the wiki.</p>",
    "name": "ListPages",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/page-list.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=list",
    "title": "List all pages",
    "description": "<p>Gets a list of all the pages currently stored on the wiki.</p>",
    "name": "ListPages",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-list.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=move[&new_name={newPageName}]",
    "title": "Move a page",
    "name": "Move",
    "group": "Page",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_name",
            "description": "<p>The new name to move the page to. If not set a page will be returned containing a move page form.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EditingDisabledError",
            "description": "<p>Editing is disabled on this wiki, so pages can't be moved.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PageExistsAtDestinationError",
            "description": "<p>A page already exists with the specified new name.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NonExistentPageError",
            "description": "<p>The page you're trying to move doesn't exist in the first place.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreExistingFileError",
            "description": "<p>A pre-existing file on the server's file system was detected.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-move.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=move[&new_name={newPageName}]",
    "title": "Move a page",
    "name": "Move",
    "group": "Page",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new_name",
            "description": "<p>The new name to move the page to. If not set a page will be returned containing a move page form.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EditingDisabledError",
            "description": "<p>Editing is disabled on this wiki, so pages can't be moved.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PageExistsAtDestinationError",
            "description": "<p>A page already exists with the specified new name.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NonExistentPageError",
            "description": "<p>The page you're trying to move doesn't exist in the first place.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreExistingFileError",
            "description": "<p>A pre-existing file on the server's file system was detected.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-move.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=protect&page={pageName}",
    "title": "Toggle the protection of a page.",
    "name": "Protect",
    "group": "Page",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page name to toggle the protection of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/action-protect.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=protect&page={pageName}",
    "title": "Toggle the protection of a page.",
    "name": "Protect",
    "group": "Page",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page name to toggle the protection of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/action-protect.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=random",
    "title": "Redirects to a random page.",
    "name": "RawSource",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/action-random.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=raw&page={pageName}",
    "title": "Get the raw source code of a page",
    "name": "RawSource",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to return the source of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/action-raw.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=raw&page={pageName}",
    "title": "Get the raw source code of a page",
    "name": "RawSource",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to return the source of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/action-raw.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=raw&page={pageName}",
    "title": "Get the raw source code of a page",
    "name": "RawSource",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to return the source of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/api-status.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=random",
    "title": "Redirects to a random page.",
    "name": "RawSource",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/action-random.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=raw&page={pageName}",
    "title": "Get the raw source code of a page",
    "name": "RawSource",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to return the source of.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/api-status.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=view[&page={pageName}][&revision=rid][&printable=yes]",
    "title": "View a page",
    "name": "View",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "revision",
            "description": "<p>The revision number to display.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mode",
            "description": "<p>Optional. The display mode to use. Can hld the following values: 'normal' - The default. Sends a normal page. 'printable' - Sends a printable version of the page. 'contentonly' - Sends only the content of the page, not the extra stuff around it. 'parsedsourceonly' - Sends only the raw rendered source of the page, as it appears just after it has come out of the page parser. Useful for writing external tools (see also the <code>raw</code> action).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NonExistentPageError",
            "description": "<p>The page doesn't exist and editing is disabled in the wiki's settings. If editing isn't disabled, you will be redirected to the edit page instead.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NonExistentRevisionError",
            "description": "<p>The specified revision was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-view.php",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=view[&page={pageName}][&revision=rid][&printable=yes]",
    "title": "View a page",
    "name": "View",
    "group": "Page",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "revision",
            "description": "<p>The revision number to display.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mode",
            "description": "<p>Optional. The display mode to use. Can hld the following values: 'normal' - The default. Sends a normal page. 'printable' - Sends a printable version of the page. 'contentonly' - Sends only the content of the page, not the extra stuff around it. 'parsedsourceonly' - Sends only the raw rendered source of the page, as it appears just after it has come out of the page parser. Useful for writing external tools (see also the <code>raw</code> action).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NonExistentPageError",
            "description": "<p>The page doesn't exist and editing is disabled in the wiki's settings. If editing isn't disabled, you will be redirected to the edit page instead.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NonExistentRevisionError",
            "description": "<p>The specified revision was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-view.php.txt",
    "groupTitle": "Page"
  },
  {
    "type": "get",
    "url": "?action=opensearch-description",
    "title": "Get the opensearch description file",
    "name": "OpenSearchDescription",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/feature-search.php",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=opensearch-description",
    "title": "Get the opensearch description file",
    "name": "OpenSearchDescription",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-search.php.txt",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=suggest-pages[&type={type}]",
    "title": "Get search suggestions for a query",
    "name": "OpenSearchDescription",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The search query string to get search suggestions for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>The type of result to return. Default value: json. Available values: json, opensearch</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-search.php.txt",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=suggest-pages[&type={type}]",
    "title": "Get search suggestions for a query",
    "name": "OpenSearchDescription",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The search query string to get search suggestions for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>The type of result to return. Default value: json. Available values: json, opensearch</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-search.php",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=search&query={text}",
    "title": "Search the wiki for a given query string",
    "name": "Search",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query",
            "description": "<p>The query string to search for.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-search.php.txt",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=query-searchindex&query={text}",
    "title": "Inspect the internals of the search results for a query",
    "name": "Search",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query",
            "description": "<p>The query string to search for.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-search.php",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=search&query={text}",
    "title": "Search the wiki for a given query string",
    "name": "Search",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query",
            "description": "<p>The query string to search for.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-search.php",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=query-searchindex&query={text}",
    "title": "Inspect the internals of the search results for a query",
    "name": "Search",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query",
            "description": "<p>The query string to search for.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-search.php.txt",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=index&page={pageName}",
    "title": "Get an index of words for a given page",
    "name": "SearchIndex",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to generate a word index page.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-search.php.txt",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=index&page={pageName}",
    "title": "Get an index of words for a given page",
    "name": "SearchIndex",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to generate a word index page.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-search.php",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=invindex-rebuild",
    "title": "Rebuild the inverted search index from scratch",
    "description": "<p>Causes the inverted search index to be completely rebuilt from scratch. Can take a while for large wikis!</p>",
    "name": "SearchInvindexRebuild",
    "group": "Search",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secret",
            "description": "<p>Optional. Specify the secret from peppermint.json here in order to rebuild the search index without logging in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-search.php.txt",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=invindex-rebuild",
    "title": "Rebuild the inverted search index from scratch",
    "description": "<p>Causes the inverted search index to be completely rebuilt from scratch. Can take a while for large wikis!</p>",
    "name": "SearchInvindexRebuild",
    "group": "Search",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secret",
            "description": "<p>Optional. Specify the secret from peppermint.json here in order to rebuild the search index without logging in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-search.php",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=idindex-show",
    "title": "Show the id index",
    "description": "<p>Outputs the id index. Useful if you need to verify that it's working as expected.</p>",
    "name": "SearchShowIdIndex",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-search.php.txt",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "?action=idindex-show",
    "title": "Show the id index",
    "description": "<p>Outputs the id index. Useful if you need to verify that it's working as expected.</p>",
    "name": "SearchShowIdIndex",
    "group": "Search",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/feature-search.php",
    "groupTitle": "Search"
  },
  {
    "type": "post",
    "url": "?action=change-password",
    "title": "Change your password",
    "name": "ChangePassword",
    "group": "Settings",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current-pass",
            "description": "<p>Your current password.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new-pass",
            "description": "<p>Your new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new-pass-confirm",
            "description": "<p>Your new password again, to make sure you've typed it correctly.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordMismatchError",
            "description": "<p>The new password fields don't match.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-user-preferences.php",
    "groupTitle": "Settings"
  },
  {
    "type": "post",
    "url": "?action=change-password",
    "title": "Change your password",
    "name": "ChangePassword",
    "group": "Settings",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current-pass",
            "description": "<p>Your current password.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new-pass",
            "description": "<p>Your new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "new-pass-confirm",
            "description": "<p>Your new password again, to make sure you've typed it correctly.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PasswordMismatchError",
            "description": "<p>The new password fields don't match.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-user-preferences.php.txt",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "?action=user-preferences",
    "title": "Get a user preferences configuration page",
    "name": "UserPreferences",
    "group": "Settings",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-user-preferences.php.txt",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "?action=user-preferences",
    "title": "Get a user preferences configuration page",
    "name": "UserPreferences",
    "group": "Settings",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/feature-user-preferences.php",
    "groupTitle": "Settings"
  },
  {
    "type": "post",
    "url": "?action=save-preferences",
    "title": "Save your user preferences",
    "name": "UserPreferencesSave",
    "group": "Settings",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-user-preferences.php.txt",
    "groupTitle": "Settings"
  },
  {
    "type": "post",
    "url": "?action=save-preferences",
    "title": "Save your user preferences",
    "name": "UserPreferencesSave",
    "group": "Settings",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/feature-user-preferences.php",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "?action=recentchanges",
    "title": "Get a list of recent changes",
    "name": "RecentChanges",
    "group": "Stats",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/feature-recent-changes.php",
    "groupTitle": "Stats"
  },
  {
    "type": "get",
    "url": "?action=recentchanges",
    "title": "Get a list of recent changes",
    "name": "RecentChanges",
    "group": "Stats",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-recent-changes.php.txt",
    "groupTitle": "Stats"
  },
  {
    "type": "get",
    "url": "?action=avatar&user={username}[&size={size}]",
    "title": "Get a user's avatar",
    "name": "Avatar",
    "group": "Upload",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>The username to fetch the avatar for</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "size",
            "description": "<p>The preferred size of the avatar</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-user-preferences.php.txt",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "?action=avatar&user={username}[&size={size}]",
    "title": "Get a user's avatar",
    "name": "Avatar",
    "group": "Upload",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>The username to fetch the avatar for</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "size",
            "description": "<p>The preferred size of the avatar</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-user-preferences.php",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "?action=preview&page={pageName}[&size={someSize}]",
    "title": "Get a preview of a file",
    "name": "PreviewFile",
    "group": "Upload",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The name of the file to preview.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>Optional. The size fo the resulting preview. Will be clamped to fit within the bounds specified in the wiki's settings. May also be set to the keyword 'original', which will cause the original file to be returned with it's appropriate mime type instead.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreviewNoFileError",
            "description": "<p>No file was found associated with the specified page.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreviewUnknownFileTypeError",
            "description": "<p>Pepperminty Wiki was unable to generate a preview for the requested file's type.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-upload.php",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "?action=preview&page={pageName}[&size={someSize}]",
    "title": "Get a preview of a file",
    "name": "PreviewFile",
    "group": "Upload",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The name of the file to preview.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>Optional. The size fo the resulting preview. Will be clamped to fit within the bounds specified in the wiki's settings. May also be set to the keyword 'original', which will cause the original file to be returned with it's appropriate mime type instead.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreviewNoFileError",
            "description": "<p>No file was found associated with the specified page.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PreviewUnknownFileTypeError",
            "description": "<p>Pepperminty Wiki was unable to generate a preview for the requested file's type.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-upload.php.txt",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "?action=upload",
    "title": "Upload a file",
    "name": "UploadFile",
    "group": "Upload",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the file to upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A description of the file.</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>The file to upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "avatar",
            "description": "<p>Whether this upload should be uploaded as the current user's avatar. If specified, any filenames provided will be ignored.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UploadsDisabledError",
            "description": "<p>Uploads are currently disabled in the wiki's settings.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownFileTypeError",
            "description": "<p>The type of the file you uploaded is not currently allowed in the wiki's settings.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageDimensionsFiledError",
            "description": "<p>PeppermintyWiki couldn't obtain the dimensions of the image you uploaded.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DangerousFileError",
            "description": "<p>The file uploaded appears to be dangerous.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateFileError",
            "description": "<p>The filename specified is a duplicate of a file that already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileTamperedError",
            "description": "<p>Pepperminty Wiki couldn't verify that the file wasn't tampered with during theupload process.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotLoggedInError",
            "description": "<p>You didn't log in before sending this request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-upload.php",
    "groupTitle": "Upload"
  },
  {
    "type": "post",
    "url": "?action=upload",
    "title": "Upload a file",
    "name": "UploadFile",
    "group": "Upload",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the file to upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>A description of the file.</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>The file to upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "avatar",
            "description": "<p>Whether this upload should be uploaded as the current user's avatar. If specified, any filenames provided will be ignored.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UploadsDisabledError",
            "description": "<p>Uploads are currently disabled in the wiki's settings.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnknownFileTypeError",
            "description": "<p>The type of the file you uploaded is not currently allowed in the wiki's settings.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ImageDimensionsFiledError",
            "description": "<p>PeppermintyWiki couldn't obtain the dimensions of the image you uploaded.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DangerousFileError",
            "description": "<p>The file uploaded appears to be dangerous.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicateFileError",
            "description": "<p>The filename specified is a duplicate of a file that already exists.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileTamperedError",
            "description": "<p>Pepperminty Wiki couldn't verify that the file wasn't tampered with during theupload process.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotLoggedInError",
            "description": "<p>You didn't log in before sending this request.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-upload.php.txt",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "?action=upload[&avatar=yes]",
    "title": "Get a page to let you upload a file.",
    "name": "UploadFilePage",
    "group": "Upload",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "avatar",
            "description": "<p>Optional. If true then a special page to upload your avatar is displayed instead.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-upload.php.txt",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "?action=upload[&avatar=yes]",
    "title": "Get a page to let you upload a file.",
    "name": "UploadFilePage",
    "group": "Upload",
    "permission": [
      {
        "name": "User",
        "title": "Only users loggged in may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "avatar",
            "description": "<p>Optional. If true then a special page to upload your avatar is displayed instead.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-upload.php",
    "groupTitle": "Upload"
  },
  {
    "type": "get",
    "url": "?action=configure",
    "title": "Get a page to change the global wiki settings",
    "name": "ConfigureSettings",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/feature-guiconfig.php",
    "groupTitle": "Utility"
  },
  {
    "type": "post",
    "url": "?action=configure-save",
    "title": "Save changes to the global wiki settings",
    "name": "ConfigureSettings",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-guiconfig.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=configure",
    "title": "Get a page to change the global wiki settings",
    "name": "ConfigureSettings",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-guiconfig.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "post",
    "url": "?action=configure-save",
    "title": "Save changes to the global wiki settings",
    "name": "ConfigureSettings",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/feature-guiconfig.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=credits",
    "title": "Get the credits page",
    "name": "Credits",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/page-credits.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=credits",
    "title": "Get the credits page",
    "name": "Credits",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-credits.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=debug",
    "title": "Get a debug dump",
    "name": "Debug",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-debug-info.php.txt",
    "groupTitle": "Utility",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "?action=debug",
    "title": "Get a debug dump",
    "name": "Debug",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/page-debug-info.php",
    "groupTitle": "Utility",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "?action=export",
    "title": "Export the all the wiki's content",
    "description": "<p>Export all the wiki's content. Please ask for permission before making a request to this URI. Note that some wikis may only allow moderators to export content.</p>",
    "name": "Export",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsufficientExportPermissionsError",
            "description": "<p>The wiki has the export_allow_only_admins option turned on, and you aren't logged into a moderator account.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouldntOpenTempFileError",
            "description": "<p>Pepperminty Wiki couldn't open a temporary file to send the compressed archive to.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouldntCloseTempFileError",
            "description": "<p>Pepperminty Wiki couldn't close the temporary file to finish creating the zip archive ready for downloading.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-export.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=export",
    "title": "Export the all the wiki's content",
    "description": "<p>Export all the wiki's content. Please ask for permission before making a request to this URI. Note that some wikis may only allow moderators to export content.</p>",
    "name": "Export",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InsufficientExportPermissionsError",
            "description": "<p>The wiki has the export_allow_only_admins option turned on, and you aren't logged into a moderator account.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouldntOpenTempFileError",
            "description": "<p>Pepperminty Wiki couldn't open a temporary file to send the compressed archive to.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouldntCloseTempFileError",
            "description": "<p>Pepperminty Wiki couldn't close the temporary file to finish creating the zip archive ready for downloading.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-export.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=hash&string={text}",
    "title": "Hash a password",
    "name": "Hash",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "string",
            "description": "<p>The string to hash.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "raw",
            "description": "<p>Whether to return the hashed password as a raw string instead of as part of an HTML page.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamNotFound",
            "description": "<p>The string parameter was not specified.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/action-hash.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=hash&string={text}",
    "title": "Hash a password",
    "name": "Hash",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "string",
            "description": "<p>The string to hash.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "raw",
            "description": "<p>Whether to return the hashed password as a raw string instead of as part of an HTML page.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParamNotFound",
            "description": "<p>The string parameter was not specified.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/action-hash.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=help[&dev=yes]",
    "title": "Get a help page",
    "description": "<p>Get a customised help page. This page will be slightly different for every wiki, depending on their name, settings, and installed modules.</p>",
    "name": "Help",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dev",
            "description": "<p>Set to 'yes' to get a developer help page instead. The developer help page gives some general information about which modules and help page sections are registered, and other various (non-sensitive) settings.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-help.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=help[&dev=yes]",
    "title": "Get a help page",
    "description": "<p>Get a customised help page. This page will be slightly different for every wiki, depending on their name, settings, and installed modules.</p>",
    "name": "Help",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dev",
            "description": "<p>Set to 'yes' to get a developer help page instead. The developer help page gives some general information about which modules and help page sections are registered, and other various (non-sensitive) settings.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-help.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=list-tags[&tag=]",
    "title": "Get a list of tags or pages with a certain tag",
    "description": "<p>Gets a list of all tags on the wiki. Adding the <code>tag</code> parameter causes a list of pages with the given tag to be returned instead.</p>",
    "name": "ListTags",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>Optional. If provided a list of all the pages with that tag is returned instead.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "format",
            "description": "<p>Optional. If specified sets the format of the returned result. Supported values: html, json. Default: html</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-list.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=list-tags[&tag=]",
    "title": "Get a list of tags or pages with a certain tag",
    "description": "<p>Gets a list of all tags on the wiki. Adding the <code>tag</code> parameter causes a list of pages with the given tag to be returned instead.</p>",
    "name": "ListTags",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>Optional. If provided a list of all the pages with that tag is returned instead.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "format",
            "description": "<p>Optional. If specified sets the format of the returned result. Supported values: html, json. Default: html</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-list.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=stats",
    "title": "Show wiki statistics",
    "name": "Stats",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "format",
            "description": "<p>Specify the format the data should be returned in. Supported formats: html (default), json.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "stat",
            "description": "<p>HTML format only. If specified the page for the stat with this id is sent instead of the list of scalar stats.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-stats.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=stats",
    "title": "Show wiki statistics",
    "name": "Stats",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "format",
            "description": "<p>Specify the format the data should be returned in. Supported formats: html (default), json.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "stat",
            "description": "<p>HTML format only. If specified the page for the stat with this id is sent instead of the list of scalar stats.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-stats.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=update[do=yes]",
    "title": "Update the wiki",
    "description": "<p>Update the wiki by downloading  a new version of Pepperminty Wiki from the URL specified in the settings. Note that unless you change the url from it's default, all custom modules installed will be removed. <strong>Note also that this plugin is currently out of date. Use with extreme caution!</strong></p>",
    "name": "Update",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "do",
            "description": "<p>Set to 'yes' to actually do the upgrade. Omission causes a page asking whether an update is desired instead.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secret",
            "description": "<p>The wiki's secret string that's stored in the settings.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "InvalidSecretError",
            "description": "<p>The supplied secret doesn't match up with the secret stored in the wiki's settings.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-update.php.txt",
    "groupTitle": "Utility",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "?action=update[do=yes]",
    "title": "Update the wiki",
    "description": "<p>Update the wiki by downloading  a new version of Pepperminty Wiki from the URL specified in the settings. Note that unless you change the url from it's default, all custom modules installed will be removed. <strong>Note also that this plugin is currently out of date. Use with extreme caution!</strong></p>",
    "name": "Update",
    "group": "Utility",
    "permission": [
      {
        "name": "Moderator",
        "title": "Only users loggged with a moderator account may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "do",
            "description": "<p>Set to 'yes' to actually do the upgrade. Omission causes a page asking whether an update is desired instead.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secret",
            "description": "<p>The wiki's secret string that's stored in the settings.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "InvalidSecretError",
            "description": "<p>The supplied secret doesn't match up with the secret stored in the wiki's settings.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-update.php",
    "groupTitle": "Utility",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotModeratorError",
            "description": "<p>You weren't loggged in as a moderator before sending this request.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get|post",
    "url": "?action=stats-update",
    "title": "Recalculate the wiki's statistics",
    "name": "UpdateStats",
    "group": "Utility",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secret",
            "description": "<p>POST only, optional. If you're not logged in, you can specify the wiki's sekret instead (find it in peppermint.json) using this parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "force",
            "description": "<p>Whether the statistics should be recalculated anyway - even if they have already recently been recalculated. Default: no. Supported values: yes, no.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/feature-stats.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get|post",
    "url": "?action=stats-update",
    "title": "Recalculate the wiki's statistics",
    "name": "UpdateStats",
    "group": "Utility",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secret",
            "description": "<p>POST only, optional. If you're not logged in, you can specify the wiki's sekret instead (find it in peppermint.json) using this parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "force",
            "description": "<p>Whether the statistics should be recalculated anyway - even if they have already recently been recalculated. Default: no. Supported values: yes, no.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/feature-stats.php",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=user-list[format=json]",
    "title": "List all users",
    "name": "UserList",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-user-list.php.txt",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "?action=user-list[format=json]",
    "title": "List all users",
    "name": "UserList",
    "group": "Utility",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "version": "0.0.0",
    "filename": "./modules/page-user-list.php",
    "groupTitle": "Utility"
  },
  {
    "type": "post",
    "url": "?action=preview-edit&page={pageName}[&newpage=yes]",
    "title": "Get a preview of the page",
    "description": "<p>Gets a preview of the current edit state of a given page</p>",
    "name": "PreviewPage",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newpage",
            "description": "<p>Set to 'yes' if a new page is being created.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "preview-edit",
            "description": "<p>Set to a value to preview an edit of a page.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./docs/ModuleApi/files/modules/page-edit.php.txt",
    "group": "_home_sbrl_Documents_code_php_peppermint_docs_ModuleApi_files_modules_page_edit_php_txt",
    "groupTitle": "_home_sbrl_Documents_code_php_peppermint_docs_ModuleApi_files_modules_page_edit_php_txt"
  },
  {
    "type": "post",
    "url": "?action=preview-edit&page={pageName}[&newpage=yes]",
    "title": "Get a preview of the page",
    "description": "<p>Gets a preview of the current edit state of a given page</p>",
    "name": "PreviewPage",
    "permission": [
      {
        "name": "Anonymous",
        "title": "Anybody may use this call.",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newpage",
            "description": "<p>Set to 'yes' if a new page is being created.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "preview-edit",
            "description": "<p>Set to a value to preview an edit of a page.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>The page to operate on.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./modules/page-edit.php",
    "group": "_home_sbrl_Documents_code_php_peppermint_modules_page_edit_php",
    "groupTitle": "_home_sbrl_Documents_code_php_peppermint_modules_page_edit_php"
  }
] });
