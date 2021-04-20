# Source code used in the paper

<<<<<<< HEAD
This page contains the code for the analysis tools and system call hooking tools of Spinner.

## Analysis tools
![](https://i.ibb.co/rZsYKjX/overview-1.jpg)
Spinner conducts bidirectional flow analysis on the target applications to do the `Command Composition Analysis` and `Program Instrumentation`. Forward flow analysis begins (1) from trusted sources to identify variables holding trusted
commands and (2) from untrusted sources to identify variables that are not relevant to commands. Backward flow analysis begins from from the arguments passed to command execution APIs (e.g., system()).

We use both the forward flow analysis and backward flow analysis (Section 4) to reduce their own limitations (i.e., over and under-approximations). The bidirectional analysis merges results from forward and backward analysis together to improve the analysis accuracy.

### Dependencies
We develop the Spinner's static analysis tool based on the below 3 tools.
#### Psalm
We reuse the Psalm's code for the static analysis. Target application need to be scanned and configured by Psalm and our plugin and analyzer/taint_string.php needs to be activated as a plugin.

Original source is **[Link](https://psalm.dev/)**.

#### PHP-CFG
Pure PHP implementation of a control flow graph (CFG) with instructions in static single assignment (SSA) form.

Original source is **[Link](https://github.com/ircmaxell/php-cfg)**.

#### PHP-Parser
A PHP parser written in PHP. Its purpose is to simplify static code analysis and manipulation.

Original source is **[Link](https://github.com/nikic/PHP-Parser)**.



## Code for syscall hook
Spinner hooks system calls using this code. This folder contains code used by Spinner to hook system calls. This code can be used to derandomize the command of sink functions to execute the intended commands and block the injected commands as shown in the hook part of Fig. 5.

Detailed Code is shown in **[`syscall_hooklib`](syscall_hooklib)**.
**System call hooking** is working in API Hook (red box) in the below figure.
![](https://i.imgur.com/yRCR5Lt.png)
=======
This page contains the code for the analysis and system call hooking modules.

## Analysis Tools

<!--![](https://i.ibb.co/rZsYKjX/overview-1.jpg)-->

Spinner conducts bidirectional flow analysis on the target applications to do the `Command Composition Analysis` and `Program Instrumentation`. Forward flow analysis begins (1) from trusted sources to identify variables holding trusted commands and (2) from untrusted sources to identify variables that are not relevant to commands. Backward flow analysis begins from the arguments passed to command execution APIs (e.g., system()).

We use both the forward flow analysis and backward flow analysis (Section 4) to reduce over and under-approximations. The bidirectional analysis merges results from forward and backward analyses together to improve the analysis accuracy.

### Static Analysis

We develop the Spinner's static analysis tool based on the below 3 existing tools.

#### Psalm

We reuse part of the Psalm's code for the static analysis.

- Target applications need to be scanned and configured by Psalm in the same way.

> Original source: **[Link](https://psalm.dev/)**.

#### PHP-CFG

PHP implementation of a control flow graph (CFG) with instructions in the SSA (Single Static Assignment) form.

> Original source: **[Link](https://github.com/ircmaxell/php-cfg)**.

#### PHP-Parser

A PHP parser written in PHP. We use it to simplify static code analysis and manipulation.

> Original source: **[Link](https://github.com/nikic/PHP-Parser)**.

## Code for API hook

Spinner hooks API calls. This folder contains code used by Spinner to hook library calls.

Detailed code can be found on **[`Hooklib`](syscall_hooklib)**.
>>>>>>> f12236e5e9c6e4fb3e0b3e8f3dd917f73585f33b
