
This branch is intentionally different than source as it only contains the build output in order to separate source files from what gets hosted at [mattborn.github.io](http://mattborn.github.io).

## Usage

1. `git checkout source`
2. Make changes
3. `git commit -m 'Source No. ###'`
4. `grunt build`
5. `git checkout master`
6. `find . -maxdepth 1 ! -name 'node_modules' ! -name 'public' ! -name '.*' | xargs rm -rf`
7. `mv public/* .`
8. `git commit -m 'Public No. ###'`

Note: The number used in step 3 and step 8 should be the same.

## Testing Prose.io

Going to save these few lines to see how it handles the commit.
