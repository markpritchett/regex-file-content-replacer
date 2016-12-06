# Regex File Content Replacer

Simple utility to do regex replacements in files matching the glob pattern

Example settings file:

``` json
[
    {
        "filePatterns": [
            "/some/glob/pattern"
        ],
        "replacements": [
            {
                "find": "foo",
                "replaceWith": "bar"
            }
        ]
    }
]
```

Example usage:

```
node index.js --settings settings.json
```

**WARNING**

**Use at your own risk. Ensure your files are source controlled or backed up first!**

Another example: creating a **settings.json** file to Convert Angular HTML from v1 to v2.

``` json
[
    {
        "filePatterns": [
            "glob/path/to/files"
        ],
        "replacements": [
            {
                "find": "(data-)?ng-click",
                "replaceWith": "(click)"
            },
            {
                "find": "(data-)?ng-model",
                "replaceWith": "[(ngModel)]"
            },
            {
                "find": "(data-)?ng-change",
                "replaceWith": "(ngModelChange)"
            },
            {
                "find": "(data-)?ng-disabled",
                "replaceWith": "[disabled]"
            },
            {
                "find": "(data-)?ng-repeat",
                "replaceWith": "*ngFor"
            },
            {
                "find": "(data-)?ng-class",
                "replaceWith": "[ngClass]"
            },
            {
                "find": "(data-)?ng-hide",
                "replaceWith": "[hidden]"
            },
            {
                "find": "(data-)?ng-show",
                "replaceWith": "*ngIf"
            },
            {
                "find": "(data-)?ng-href",
                "replaceWith": "[href]"
            },
            {
                "find": "(data-)?ng-if",
                "replaceWith": "*ngIf"
            },
            {
                "find": "(data-)?ng-src",
                "replaceWith": "[src]"
            },
            {
                "find": "(data-)?ng-style",
                "replaceWith": "[ngStyle]"
            },
            {
                "find": "\"(.*) in (.*)\"",
                "replaceWith": "\"let $1 of $2\""
            }
        ]
    }
]
``` 