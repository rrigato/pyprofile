# pyprofile
The goal of this repo is to poc code standards on python and javascript file linting

## requirements
- function line count by file starting with the main entry point
- Function call count by file starting with the main entry point
- *optional* a nice graph of which functions call which functions

## run_profiler
```
python -m cProfile -m pyprofile
```

## eslint_config

### initialize_node
```
node use 14.10.1
```

### setup_eslint
```
npx eslint --init
```

### pylint
Pylint does not appear to add the current directory to the python path.

Needed to add the current directory to sys.path in pylintrc init,

```
[MASTER]
init-hook='import sys; sys.path.append(".")'
```
this is a workaround that I do not like

The above pylintrc configuration works when running pylint inside the :

```
pylint pyprofile.py
```

### flake8
Simple invocation:
```
flake8 .
```

The ```.flake8``` file controls customization and ignores

## puppeteer

### unhandled_rejections
If an unexpected error occurs in the login process, puppeteer will reject the promise.

You can use a try/catch block to handle this error or alternatively allow the error to write to stderr on the command line by invoking the node script with the following:

```
node --unhandled-rejections=strict web_login.js

echo $? # false if unhandled rejection from puppeteer, true otherwise
```

https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode