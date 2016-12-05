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