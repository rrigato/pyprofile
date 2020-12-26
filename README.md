#pyprofile
The goal of this repo is to poc code standards on python files to ensure function size

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