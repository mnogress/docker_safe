---
layout: single
title: Laravel on Win Docker Desktop Installation Memo
toc: true
toc_label: "目次"
toc_icon: "heart" 
excerpt_separator: <!--more-->
classes:
  - landing
  - dark-theme
  - wide
sidebar:
  nav: "docs"
---
Laravel を Docker Sail で導入した際のログになります。<!--more-->

----

{% highlight python linenos %}

Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.90.1-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

 * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
   just raised the bar for easy, resilient and secure K8s cluster deployment.

   https://ubuntu.com/engage/secure-kubernetes-at-the-edge

This message is shown once a day. To disable it please create the
/home/user/.hushlogin file.
user@KENKYU01:~$ curl -s https://laravel.build/example-app | bash
latest: Pulling from laravelsail/php82-composer
bb263680fed1: Pull complete
0825793cba86: Pull complete
de3c011d207b: Pull complete
7e3c5bd9650e: Pull complete
e5ef4f07283b: Pull complete
729644263cfa: Pull complete
9c646fe3f3c5: Pull complete
e7c9e0a2bc78: Pull complete
87fd6a1f6441: Pull complete
136b5bfaa68e: Pull complete
cf33f30cc64a: Pull complete
9250c2dfc674: Pull complete
4f4fb700ef54: Pull complete
59bc22386503: Pull complete
376a1c60a489: Pull complete
Digest: sha256:37549f980be6146efcb16b0dc352644edfc5cca32b9862494631eb197ef89737
Status: Downloaded newer image for laravelsail/php82-composer:latest

   _                               _
  | |                             | |
  | |     __ _ _ __ __ ___   _____| |
  | |    / _` | '__/ _` \ \ / / _ \ |
  | |___| (_| | | | (_| |\ V /  __/ |
  |______\__,_|_|  \__,_| \_/ \___|_|

   WARN  TTY mode requires /dev/tty to be read/writable.

    Creating a "laravel/laravel" project at "./example-app"
    Info from https://repo.packagist.org: #StandWithUkraine
    Installing laravel/laravel (v10.2.6)
      - Downloading laravel/laravel (v10.2.6)
      - Installing laravel/laravel (v10.2.6): Extracting archive
    Created project in /opt/example-app
    > @php -r "file_exists('.env') || copy('.env.example', '.env');"
    Loading composer repositories with package information
    Updating dependencies
    Lock file operations: 110 installs, 0 updates, 0 removals
      - Locking brick/math (0.11.0)
  - Locking dflydev/dot-access-data (v3.0.2)
      - Locking doctrine/inflector (2.0.8)
  - Locking doctrine/lexer (3.0.0)
  - Locking dragonmantank/cron-expression (v3.3.3)
      - Locking egulias/email-validator (4.0.1)
      - Locking fakerphp/faker (v1.23.0)
      - Locking filp/whoops (2.15.3)
      - Locking fruitcake/php-cors (v1.2.0)
      - Locking graham-campbell/result-type (v1.1.1)
  - Locking guzzlehttp/guzzle (7.8.0)
      - Locking guzzlehttp/promises (2.0.1)
  - Locking guzzlehttp/psr7 (2.6.1)
      - Locking guzzlehttp/uri-template (v1.0.2)
      - Locking hamcrest/hamcrest-php (v2.0.1)
      - Locking laravel/framework (v10.21.0)
      - Locking laravel/pint (v1.12.0)
      - Locking laravel/prompts (v0.1.6)
  - Locking laravel/sail (v1.24.0)
      - Locking laravel/sanctum (v3.2.6)
      - Locking laravel/serializable-closure (v1.3.1)
      - Locking laravel/tinker (v2.8.2)
      - Locking league/commonmark (2.4.1)
      - Locking league/config (v1.2.0)
      - Locking league/flysystem (3.15.1)
  - Locking league/flysystem-local (3.15.0)
      - Locking league/mime-type-detection (1.13.0)
      - Locking mockery/mockery (1.6.6)
      - Locking monolog/monolog (3.4.0)
      - Locking myclabs/deep-copy (1.11.1)
  - Locking nesbot/carbon (2.69.0)
      - Locking nette/schema (v1.2.4)
      - Locking nette/utils (v4.0.1)
      - Locking nikic/php-parser (v4.17.1)
      - Locking nunomaduro/collision (v7.8.1)
  - Locking nunomaduro/termwind (v1.15.1)
  - Locking phar-io/manifest (2.0.3)
  - Locking phar-io/version (3.2.1)
  - Locking phpoption/phpoption (1.9.1)
  - Locking phpunit/php-code-coverage (10.1.3)
      - Locking phpunit/php-file-iterator (4.0.2)
  - Locking phpunit/php-invoker (4.0.0)
      - Locking phpunit/php-text-template (3.0.0)
      - Locking phpunit/php-timer (6.0.0)
      - Locking phpunit/phpunit (10.3.2)
  - Locking psr/clock (1.0.0)
      - Locking psr/container (2.0.2)
  - Locking psr/event-dispatcher (1.0.0)
  - Locking psr/http-client (1.0.2)
  - Locking psr/http-factory (1.0.2)
      - Locking psr/http-message (2.0)
  - Locking psr/log (3.0.0)
  - Locking psr/simple-cache (3.0.0)
      - Locking psy/psysh (v0.11.20)
  - Locking ralouphie/getallheaders (3.0.3)
      - Locking ramsey/collection (2.0.0)
      - Locking ramsey/uuid (4.7.4)
      - Locking sebastian/cli-parser (2.0.0)
      - Locking sebastian/code-unit (2.0.0)
      - Locking sebastian/code-unit-reverse-lookup (3.0.0)
      - Locking sebastian/comparator (5.0.1)
      - Locking sebastian/complexity (3.0.0)
      - Locking sebastian/diff (5.0.3)
      - Locking sebastian/environment (6.0.1)
      - Locking sebastian/exporter (5.0.0)
      - Locking sebastian/global-state (6.0.1)
      - Locking sebastian/lines-of-code (2.0.0)
  - Locking sebastian/object-enumerator (5.0.0)
      - Locking sebastian/object-reflector (3.0.0)
      - Locking sebastian/recursion-context (5.0.0)
  - Locking sebastian/type (4.0.0)
      - Locking sebastian/version (4.0.1)
      - Locking spatie/backtrace (1.5.3)
      - Locking spatie/flare-client-php (1.4.2)
  - Locking spatie/ignition (1.10.1)
      - Locking spatie/laravel-ignition (2.3.0)
      - Locking symfony/console (v6.3.4)
      - Locking symfony/css-selector (v6.3.2)
      - Locking symfony/deprecation-contracts (v3.3.0)
      - Locking symfony/error-handler (v6.3.2)
      - Locking symfony/event-dispatcher (v6.3.2)
      - Locking symfony/event-dispatcher-contracts (v3.3.0)
      - Locking symfony/finder (v6.3.3)
      - Locking symfony/http-foundation (v6.3.4)
  - Locking symfony/http-kernel (v6.3.4)
  - Locking symfony/mailer (v6.3.0)
  - Locking symfony/mime (v6.3.3)
      - Locking symfony/polyfill-ctype (v1.28.0)
  - Locking symfony/polyfill-intl-grapheme (v1.28.0)
  - Locking symfony/polyfill-intl-idn (v1.28.0)
      - Locking symfony/polyfill-intl-normalizer (v1.28.0)
  - Locking symfony/polyfill-mbstring (v1.28.0)
  - Locking symfony/polyfill-php72 (v1.28.0)
  - Locking symfony/polyfill-php80 (v1.28.0)
  - Locking symfony/polyfill-php83 (v1.28.0)
  - Locking symfony/polyfill-uuid (v1.28.0)
      - Locking symfony/process (v6.3.4)
      - Locking symfony/routing (v6.3.3)
      - Locking symfony/service-contracts (v3.3.0)
  - Locking symfony/string (v6.3.2)
      - Locking symfony/translation (v6.3.3)
  - Locking symfony/translation-contracts (v3.3.0)
      - Locking symfony/uid (v6.3.0)
      - Locking symfony/var-dumper (v6.3.4)
  - Locking symfony/yaml (v6.3.3)
  - Locking theseer/tokenizer (1.2.1)
      - Locking tijsverkoyen/css-to-inline-styles (2.2.6)
      - Locking vlucas/phpdotenv (v5.5.0)
  - Locking voku/portable-ascii (2.0.1)
      - Locking webmozart/assert (1.11.0)
    Writing lock file
    Installing dependencies from lock file (including require-dev)
    Package operations: 110 installs, 0 updates, 0 removals
      - Downloading doctrine/inflector (2.0.8)
      - Downloading doctrine/lexer (3.0.0)
      - Downloading symfony/polyfill-ctype (v1.28.0)
      - Downloading webmozart/assert (1.11.0)
      - Downloading dragonmantank/cron-expression (v3.3.3)
      - Downloading symfony/deprecation-contracts (v3.3.0)
      - Downloading fakerphp/faker (v1.23.0)
      - Downloading symfony/polyfill-php80 (v1.28.0)
      - Downloading symfony/polyfill-php83 (v1.28.0)
      - Downloading symfony/polyfill-mbstring (v1.28.0)
      - Downloading symfony/http-foundation (v6.3.4)
      - Downloading fruitcake/php-cors (v1.2.0)
      - Downloading psr/http-message (2.0)
      - Downloading psr/http-client (1.0.2)
      - Downloading ralouphie/getallheaders (3.0.3)
      - Downloading psr/http-factory (1.0.2)
      - Downloading guzzlehttp/psr7 (2.6.1)
      - Downloading guzzlehttp/promises (2.0.1)
      - Downloading guzzlehttp/guzzle (7.8.0)
      - Downloading guzzlehttp/uri-template (v1.0.2)
      - Downloading laravel/pint (v1.12.0)
      - Downloading symfony/polyfill-intl-normalizer (v1.28.0)
      - Downloading symfony/polyfill-intl-grapheme (v1.28.0)
      - Downloading symfony/string (v6.3.2)
      - Downloading symfony/service-contracts (v3.3.0)
      - Downloading symfony/console (v6.3.4)
      - Downloading voku/portable-ascii (2.0.1)
      - Downloading phpoption/phpoption (1.9.1)
      - Downloading graham-campbell/result-type (v1.1.1)
      - Downloading vlucas/phpdotenv (v5.5.0)
      - Downloading symfony/css-selector (v6.3.2)
      - Downloading tijsverkoyen/css-to-inline-styles (2.2.6)
      - Downloading symfony/var-dumper (v6.3.4)
      - Downloading symfony/polyfill-uuid (v1.28.0)
      - Downloading symfony/uid (v6.3.0)
      - Downloading symfony/routing (v6.3.3)
      - Downloading symfony/process (v6.3.4)
      - Downloading symfony/polyfill-php72 (v1.28.0)
      - Downloading symfony/polyfill-intl-idn (v1.28.0)
      - Downloading symfony/mime (v6.3.3)
      - Downloading psr/event-dispatcher (1.0.0)
      - Downloading symfony/event-dispatcher-contracts (v3.3.0)
      - Downloading symfony/event-dispatcher (v6.3.2)
      - Downloading psr/log (3.0.0)
      - Downloading egulias/email-validator (4.0.1)
      - Downloading symfony/mailer (v6.3.0)
  - Downloading symfony/error-handler (v6.3.2)
  - Downloading symfony/http-kernel (v6.3.4)
  - Downloading symfony/finder (v6.3.3)
  - Downloading ramsey/collection (2.0.0)
  - Downloading brick/math (0.11.0)
  - Downloading ramsey/uuid (4.7.4)
  - Downloading psr/simple-cache (3.0.0)
  - Downloading nunomaduro/termwind (v1.15.1)
  - Downloading symfony/translation-contracts (v3.3.0)
      - Downloading symfony/translation (v6.3.3)
      - Downloading psr/clock (1.0.0)
      - Downloading nesbot/carbon (2.69.0)
      - Downloading monolog/monolog (3.4.0)
      - Downloading league/mime-type-detection (1.13.0)
      - Downloading league/flysystem (3.15.1)
      - Downloading league/flysystem-local (3.15.0)
      - Downloading nette/utils (v4.0.1)
      - Downloading nette/schema (v1.2.4)
      - Downloading dflydev/dot-access-data (v3.0.2)
      - Downloading league/config (v1.2.0)
      - Downloading league/commonmark (2.4.1)
      - Downloading laravel/serializable-closure (v1.3.1)
      - Downloading laravel/prompts (v0.1.6)
      - Downloading laravel/framework (v10.21.0)
      - Downloading symfony/yaml (v6.3.3)
      - Downloading laravel/sail (v1.24.0)
      - Downloading laravel/sanctum (v3.2.6)
      - Downloading nikic/php-parser (v4.17.1)
      - Downloading psy/psysh (v0.11.20)
      - Downloading laravel/tinker (v2.8.2)
      - Downloading hamcrest/hamcrest-php (v2.0.1)
      - Downloading mockery/mockery (1.6.6)
      - Downloading filp/whoops (2.15.3)
      - Downloading nunomaduro/collision (v7.8.1)
      - Downloading sebastian/version (4.0.1)
      - Downloading sebastian/type (4.0.0)
      - Downloading sebastian/recursion-context (5.0.0)
      - Downloading sebastian/object-reflector (3.0.0)
      - Downloading sebastian/object-enumerator (5.0.0)
      - Downloading sebastian/global-state (6.0.1)
      - Downloading sebastian/exporter (5.0.0)
      - Downloading sebastian/environment (6.0.1)
      - Downloading sebastian/diff (5.0.3)
      - Downloading sebastian/comparator (5.0.1)
      - Downloading sebastian/code-unit (2.0.0)
      - Downloading sebastian/cli-parser (2.0.0)
      - Downloading phpunit/php-timer (6.0.0)
      - Downloading phpunit/php-text-template (3.0.0)
      - Downloading phpunit/php-invoker (4.0.0)
      - Downloading phpunit/php-file-iterator (4.0.2)
      - Downloading sebastian/lines-of-code (2.0.0)
      - Downloading sebastian/complexity (3.0.0)
      - Downloading sebastian/code-unit-reverse-lookup (3.0.0)
      - Downloading phpunit/php-code-coverage (10.1.3)
      - Downloading myclabs/deep-copy (1.11.1)
      - Downloading phpunit/phpunit (10.3.2)
      - Downloading spatie/backtrace (1.5.3)
      - Downloading spatie/flare-client-php (1.4.2)
      - Downloading spatie/ignition (1.10.1)
      - Downloading spatie/laravel-ignition (2.3.0)
      - Installing doctrine/inflector (2.0.8): Extracting archive
      - Installing doctrine/lexer (3.0.0): Extracting archive
      - Installing symfony/polyfill-ctype (v1.28.0): Extracting archive
      - Installing webmozart/assert (1.11.0): Extracting archive
      - Installing dragonmantank/cron-expression (v3.3.3): Extracting archive
      - Installing symfony/deprecation-contracts (v3.3.0): Extracting archive
      - Installing psr/container (2.0.2): Extracting archive
      - Installing fakerphp/faker (v1.23.0): Extracting archive
      - Installing symfony/polyfill-php80 (v1.28.0): Extracting archive
      - Installing symfony/polyfill-php83 (v1.28.0): Extracting archive
      - Installing symfony/polyfill-mbstring (v1.28.0): Extracting archive
      - Installing symfony/http-foundation (v6.3.4): Extracting archive
      - Installing fruitcake/php-cors (v1.2.0): Extracting archive
      - Installing psr/http-message (2.0): Extracting archive
      - Installing psr/http-client (1.0.2): Extracting archive
      - Installing ralouphie/getallheaders (3.0.3): Extracting archive
      - Installing psr/http-factory (1.0.2): Extracting archive
      - Installing guzzlehttp/psr7 (2.6.1): Extracting archive
      - Installing guzzlehttp/promises (2.0.1): Extracting archive
      - Installing guzzlehttp/guzzle (7.8.0): Extracting archive
      - Installing guzzlehttp/uri-template (v1.0.2): Extracting archive
      - Installing laravel/pint (v1.12.0): Extracting archive
      - Installing symfony/polyfill-intl-normalizer (v1.28.0): Extracting archive
      - Installing symfony/polyfill-intl-grapheme (v1.28.0): Extracting archive
      - Installing symfony/string (v6.3.2): Extracting archive
      - Installing symfony/service-contracts (v3.3.0): Extracting archive
      - Installing symfony/console (v6.3.4): Extracting archive
      - Installing voku/portable-ascii (2.0.1): Extracting archive
      - Installing phpoption/phpoption (1.9.1): Extracting archive
      - Installing graham-campbell/result-type (v1.1.1): Extracting archive
      - Installing vlucas/phpdotenv (v5.5.0): Extracting archive
      - Installing symfony/css-selector (v6.3.2): Extracting archive
      - Installing tijsverkoyen/css-to-inline-styles (2.2.6): Extracting archive
      - Installing symfony/var-dumper (v6.3.4): Extracting archive
      - Installing symfony/polyfill-uuid (v1.28.0): Extracting archive
      - Installing symfony/uid (v6.3.0): Extracting archive
      - Installing symfony/routing (v6.3.3): Extracting archive
      - Installing symfony/process (v6.3.4): Extracting archive
      - Installing symfony/polyfill-php72 (v1.28.0): Extracting archive
      - Installing symfony/polyfill-intl-idn (v1.28.0): Extracting archive
      - Installing symfony/mime (v6.3.3): Extracting archive
      - Installing psr/event-dispatcher (1.0.0): Extracting archive
      - Installing symfony/event-dispatcher-contracts (v3.3.0): Extracting archive
      - Installing symfony/event-dispatcher (v6.3.2): Extracting archive
      - Installing psr/log (3.0.0): Extracting archive
      - Installing egulias/email-validator (4.0.1): Extracting archive
      - Installing symfony/mailer (v6.3.0): Extracting archive
      - Installing symfony/error-handler (v6.3.2): Extracting archive
      - Installing symfony/http-kernel (v6.3.4): Extracting archive
      - Installing symfony/finder (v6.3.3): Extracting archive
      - Installing ramsey/collection (2.0.0): Extracting archive
      - Installing brick/math (0.11.0): Extracting archive
      - Installing ramsey/uuid (4.7.4): Extracting archive
      - Installing psr/simple-cache (3.0.0): Extracting archive
      - Installing nunomaduro/termwind (v1.15.1): Extracting archive
      - Installing symfony/translation-contracts (v3.3.0): Extracting archive
      - Installing symfony/translation (v6.3.3): Extracting archive
      - Installing psr/clock (1.0.0): Extracting archive
      - Installing nesbot/carbon (2.69.0): Extracting archive
      - Installing monolog/monolog (3.4.0): Extracting archive
      - Installing league/mime-type-detection (1.13.0): Extracting archive
      - Installing league/flysystem (3.15.1): Extracting archive
      - Installing league/flysystem-local (3.15.0): Extracting archive
      - Installing nette/utils (v4.0.1): Extracting archive
      - Installing nette/schema (v1.2.4): Extracting archive
      - Installing dflydev/dot-access-data (v3.0.2): Extracting archive
      - Installing league/config (v1.2.0): Extracting archive
      - Installing league/commonmark (2.4.1): Extracting archive
      - Installing laravel/serializable-closure (v1.3.1): Extracting archive
      - Installing laravel/prompts (v0.1.6): Extracting archive
      - Installing laravel/framework (v10.21.0): Extracting archive
      - Installing symfony/yaml (v6.3.3): Extracting archive
      - Installing laravel/sail (v1.24.0): Extracting archive
      - Installing laravel/sanctum (v3.2.6): Extracting archive
      - Installing nikic/php-parser (v4.17.1): Extracting archive
      - Installing psy/psysh (v0.11.20): Extracting archive
      - Installing laravel/tinker (v2.8.2): Extracting archive
      - Installing hamcrest/hamcrest-php (v2.0.1): Extracting archive
      - Installing mockery/mockery (1.6.6): Extracting archive
      - Installing filp/whoops (2.15.3): Extracting archive
      - Installing nunomaduro/collision (v7.8.1): Extracting archive
      - Installing sebastian/version (4.0.1): Extracting archive
      - Installing sebastian/type (4.0.0): Extracting archive
      - Installing sebastian/recursion-context (5.0.0): Extracting archive
      - Installing sebastian/object-reflector (3.0.0): Extracting archive
      - Installing sebastian/object-enumerator (5.0.0): Extracting archive
      - Installing sebastian/global-state (6.0.1): Extracting archive
      - Installing sebastian/exporter (5.0.0): Extracting archive
      - Installing sebastian/environment (6.0.1): Extracting archive
      - Installing sebastian/diff (5.0.3): Extracting archive
      - Installing sebastian/comparator (5.0.1): Extracting archive
      - Installing sebastian/code-unit (2.0.0): Extracting archive
      - Installing sebastian/cli-parser (2.0.0): Extracting archive
      - Installing phpunit/php-timer (6.0.0): Extracting archive
      - Installing phpunit/php-text-template (3.0.0): Extracting archive
      - Installing phpunit/php-invoker (4.0.0): Extracting archive
      - Installing phpunit/php-file-iterator (4.0.2): Extracting archive
      - Installing theseer/tokenizer (1.2.1): Extracting archive
      - Installing sebastian/lines-of-code (2.0.0): Extracting archive
      - Installing sebastian/complexity (3.0.0): Extracting archive
      - Installing sebastian/code-unit-reverse-lookup (3.0.0): Extracting archive
      - Installing phpunit/php-code-coverage (10.1.3): Extracting archive
      - Installing phar-io/version (3.2.1): Extracting archive
      - Installing phar-io/manifest (2.0.3): Extracting archive
      - Installing myclabs/deep-copy (1.11.1): Extracting archive
      - Installing phpunit/phpunit (10.3.2): Extracting archive
      - Installing spatie/backtrace (1.5.3): Extracting archive
      - Installing spatie/flare-client-php (1.4.2): Extracting archive
      - Installing spatie/ignition (1.10.1): Extracting archive
      - Installing spatie/laravel-ignition (2.3.0): Extracting archive
    55 package suggestions were added by new dependencies, use `composer suggest` to see details.
    Generating optimized autoload files
    > Illuminate\Foundation\ComposerScripts::postAutoloadDump
    > @php artisan package:discover --ansi

   INFO  Discovering packages.

      laravel/sail     ..........................................................     DONE
      laravel/sanctum     .......................................................     DONE
      laravel/tinker     ........................................................     DONE
  nesbot/carbon     .........................................................     DONE
  nunomaduro/collision     ..................................................     DONE
  nunomaduro/termwind     ...................................................     DONE
      spatie/laravel-ignition     ...............................................     DONE

    82 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
    > @php artisan vendor:publish --tag=laravel-assets --ansi --force

   INFO  No publishable resources for tag [laravel-assets].

    No security vulnerability advisories found
    > @php artisan key:generate --ansi

   INFO  Application key set successfully.

   INFO  Application ready! Build something amazing.

Sail scaffolding installed successfully.
   WARN  TTY mode requires /dev/tty to be read/writable.

[+] Pulling 58/5
 ✔ selenium 33 layers [⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                    1277.7s
 ✔ redis 5 layers [⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                     670.0s
 ✔ mysql 7 layers [⣿⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                   683.9s
 ✔ meilisearch 5 layers [⣿⣿⣿⣿⣿]      0B/0B      Pulled                                               651.2s
 ✔ mailpit 3 layers [⣿⣿⣿]      0B/0B      Pulled                                                     467.4s
[+] Building 4290.1s (16/16) FINISHED
 => [laravel.test internal] load .dockerignore                                                         8.5s
 => => transferring context: 2B                                                                        0.7s
 => [laravel.test internal] load build definition from Dockerfile                                     10.3s
 => => transferring dockerfile: 2.78kB                                                                 2.7s
 => [laravel.test internal] load metadata for docker.io/library/ubuntu:22.04                          30.1s
 => [laravel.test  1/11] FROM docker.io/library/ubuntu:22.04@sha256:ec050c32e4a6085b423d36ecd025c0d3  59.7s
 => => resolve docker.io/library/ubuntu:22.04@sha256:ec050c32e4a6085b423d36ecd025c0d3ff00c38ab93a3d71  3.0s
 => => sha256:ec050c32e4a6085b423d36ecd025c0d3ff00c38ab93a3d71a460ff1c44fa6d77 1.13kB / 1.13kB         0.0s
 => => sha256:56887c5194fddd8db7e36ced1c16b3569d89f74c801dc8a5adbf48236fb34564 424B / 424B             0.0s
 => => sha256:01f29b872827fa6f9aed0ea0b2ede53aea4ad9d66c7920e81a8db6d1fd9ab7f9 2.30kB / 2.30kB         0.0s
 => => sha256:b237fe92c4173e4dfb3ba82e76e5fed4b16186a6161e07af15814cb40eb9069d 29.54MB / 29.54MB      39.1s
 => => extracting sha256:b237fe92c4173e4dfb3ba82e76e5fed4b16186a6161e07af15814cb40eb9069d              8.1s
 => [laravel.test internal] load build context                                                         4.9s
 => => transferring context: 907B                                                                      0.1s
 => [laravel.test  2/11] WORKDIR /var/www/html                                                        15.0s
 => [laravel.test  3/11] RUN ln -snf /usr/share/zoneinfo/UTC /etc/localtime && echo UTC > /etc/timez  60.5s
 => [laravel.test  4/11] RUN apt-get update     && apt-get install -y gnupg gosu curl ca-certifica  3837.5s
 => [laravel.test  5/11] RUN setcap "cap_net_bind_service=+ep" /usr/bin/php8.2                        20.2s
 => [laravel.test  6/11] RUN groupadd --force -g 1000 sail                                             6.3s
 => [laravel.test  7/11] RUN useradd -ms /bin/bash --no-user-group -g 1000 -u 1337 sail                9.2s
 => [laravel.test  8/11] COPY start-container /usr/local/bin/start-container                           3.9s
 => [laravel.test  9/11] COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf                 2.7s
 => [laravel.test 10/11] COPY php.ini /etc/php/8.2/cli/conf.d/99-sail.ini                              2.8s
 => [laravel.test 11/11] RUN chmod +x /usr/local/bin/start-container                                   5.0s
 => [laravel.test] exporting to image                                                                200.0s
 => => exporting layers                                                                              199.2s
 => => writing image sha256:46e4b16e72f60177c5fcf7aa4b7c18ad64c8de4b0ccf2a74f4cb9067bddd44e3           0.2s
 => => naming to sail-8.2/app                                                                          0.4s

Please provide your password so we can make some final adjustments to your application's permissions.

[sudo] password for user:


Thank you! We hope you build something incredible. Dive in with: cd example-app && ./vendor/bin/sail up
user@KENKYU01:~$

Please provide your password so we can make some final adjustments to your application's permissions.

[sudo] password for user:


Thank you! We hope you build something incredible. Dive in with: cd example-app && ./vendor/bin/sail up
user@KENKYU01:~$
user@KENKYU01:~$ cd example-app && ./vendor/bin/sail up
[+] Running 10/10
 ✔ Network example-app_sail               Created                                                      1.8s
 ✔ Volume "example-app_sail-mysql"        Created                                                      0.5s
 ✔ Volume "example-app_sail-redis"        Created                                                      0.2s
 ✔ Volume "example-app_sail-meilisearch"  Created                                                      0.3s
 ✔ Container example-app-selenium-1       Created                                                     17.9s
 ✔ Container example-app-meilisearch-1    Created                                                     15.3s
 ✔ Container example-app-mysql-1          Created                                                     17.5s
 ✔ Container example-app-mailpit-1        Created                                                     16.3s
 ✔ Container example-app-redis-1          Created                                                     16.1s
 ✔ Container example-app-laravel.test-1   Created                                                      2.9s
Attaching to example-app-laravel.test-1, example-app-mailpit-1, example-app-meilisearch-1, example-app-mysql-1, example-app-redis-1, example-app-selenium-1
example-app-mysql-1         | [Entrypoint] MySQL Docker Image 8.0.32-1.2.11-server
example-app-redis-1         | 1:C 31 Aug 2023 02:28:08.405 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
example-app-redis-1         | 1:C 31 Aug 2023 02:28:08.752 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
example-app-redis-1         | 1:C 31 Aug 2023 02:28:08.752 * Redis version=7.2.0, bits=64, commit=00000000, modified=0, pid=1, just started
example-app-redis-1         | 1:C 31 Aug 2023 02:28:08.752 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
example-app-redis-1         | 1:M 31 Aug 2023 02:28:08.753 * monotonic clock: POSIX clock_gettime
example-app-redis-1         | 1:M 31 Aug 2023 02:28:09.059 * Running mode=standalone, port=6379.
example-app-redis-1         | 1:M 31 Aug 2023 02:28:09.151 * Server initialized
example-app-redis-1         | 1:M 31 Aug 2023 02:28:09.151 * Ready to accept connections tcp
example-app-meilisearch-1   |
example-app-meilisearch-1   | 888b     d888          d8b 888 d8b
888
example-app-meilisearch-1   | 8888b   d8888          Y8P 888 Y8P
888
example-app-meilisearch-1   | 88888b.d88888              888
888
example-app-meilisearch-1   | 888Y88888P888  .d88b.  888 888 888 .d8888b   .d88b.   8888b.  888d888 .d8888b 88888b.
example-app-meilisearch-1   | 888 Y888P 888 d8P  Y8b 888 888 888 88K      d8P  Y8b     "88b 888P"  d88P"    888 "88b
example-app-meilisearch-1   | 888  Y8P  888 88888888 888 888 888 "Y8888b. 88888888 .d888888 888    888      888  888
example-app-meilisearch-1   | 888   "   888 Y8b.     888 888 888      X88 Y8b.     888  888 888    Y88b.    888  888
example-app-meilisearch-1   | 888       888  "Y8888  888 888 888  88888P'  "Y8888  "Y888888 888     "Y8888P 888  888
example-app-meilisearch-1   |
example-app-meilisearch-1   | Config file path: "none"
example-app-meilisearch-1   | Database path:            "./data.ms"
example-app-meilisearch-1   | Server listening on:      "http://0.0.0.0:7700"
example-app-meilisearch-1   | Environment:              "development"
example-app-meilisearch-1   | Commit SHA:               "cdb4b3e024a06472b9e2ec5e861c9998cfc7e964"
example-app-meilisearch-1   | Commit date:              "2023-08-23T15:30:56+00:00"
example-app-meilisearch-1   | Package version:  "1.3.2"
example-app-meilisearch-1   |
example-app-meilisearch-1   | Thank you for using Meilisearch!
example-app-meilisearch-1   |
example-app-meilisearch-1   |
example-app-meilisearch-1   | We collect anonymized analytics to improve our product and your experience. To learn more, including how to turn off analytics, visit our dedicated documentation page: https://www.meilisearch.com/docs/learn/what_is_meilisearch/telemetry
example-app-meilisearch-1   |
example-app-meilisearch-1   | Anonymous telemetry:      "Enabled"
example-app-meilisearch-1   | Instance UID:             "96f1c29e-e91b-4f99-8402-e35f372caf9a"
example-app-meilisearch-1   |
example-app-meilisearch-1   |
example-app-meilisearch-1   |
example-app-meilisearch-1   |  No master key was found. The server will accept unidentified requests.
example-app-meilisearch-1   |
example-app-meilisearch-1   |  A master key of at least 16 bytes will be required when switching to a production environment.
example-app-meilisearch-1   |
example-app-meilisearch-1   |
example-app-meilisearch-1   |
example-app-meilisearch-1   | We generated a new secure master key for you (you can safely use this token):
example-app-meilisearch-1   |
example-app-meilisearch-1   | >> --master-key EkNcS0wgHptXKg-NAF6BgZrHP2EJyZFCkfT2ocJVdsk <<
example-app-meilisearch-1   |
example-app-meilisearch-1   | Restart Meilisearch with the argument above to use this new and secure master key.
example-app-meilisearch-1   |
example-app-meilisearch-1   | Check out Meilisearch Cloud!      https://www.meilisearch.com/cloud?utm_campaign=oss&utm_source=engine&utm_medium=cli
example-app-meilisearch-1   | Documentation:                    https://www.meilisearch.com/docs
example-app-meilisearch-1   | Source code:                      https://github.com/meilisearch/meilisearch
example-app-meilisearch-1   | Discord:                  https://discord.meilisearch.com
example-app-meilisearch-1   |
example-app-meilisearch-1   |
example-app-meilisearch-1   | [2023-08-31T02:28:23Z INFO  actix_server::builder] starting 4 workers
example-app-meilisearch-1   | [2023-08-31T02:28:23Z INFO  actix_server::server] Actix runtime found; starting in Actix runtime
example-app-mailpit-1       | INFO[2023/08/31 02:28:31] [smtpd] starting on 0.0.0.0:1025
example-app-mailpit-1       | INFO[2023/08/31 02:28:31] [http] starting server on http://localhost:8025/
example-app-laravel.test-1  | 2023-08-31 02:28:31,750 INFO Set uid to user 0 succeeded
example-app-laravel.test-1  | 2023-08-31 02:28:31,856 INFO supervisord started with pid 1
example-app-laravel.test-1  | 2023-08-31 02:28:32,860 INFO spawned: 'php' with pid 16
example-app-laravel.test-1  | 2023-08-31 02:28:33,864 INFO success: php entered RUNNING state, process has stayed up for > than 1 seconds (startsecs)
example-app-mysql-1         | [Entrypoint] Initializing database
example-app-mysql-1         | 2023-08-31T02:28:49.079077Z 0 [Warning] [MY-011068] [Server] The syntax '--skip-host-cache' is deprecated and will be removed in a future release. Please use SET GLOBAL host_cache_size=0 instead.
example-app-mysql-1         | 2023-08-31T02:28:49.156655Z 0 [System] [MY-013169] [Server] /usr/sbin/mysqld (mysqld 8.0.32) initializing of server in progress as process 23
example-app-mysql-1         | 2023-08-31T02:28:50.660795Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
example-app-selenium-1      | 2023-08-31 02:28:56,446 INFO Included extra file "/etc/supervisor/conf.d/selenium.conf" during parsing
example-app-selenium-1      | 2023-08-31 02:28:56,908 INFO RPC interface 'supervisor' initialized
example-app-selenium-1      | 2023-08-31 02:28:56,909 CRIT Server 'unix_http_server' running without any HTTP authentication checking
example-app-selenium-1      | 2023-08-31 02:28:57,132 INFO supervisord started with pid 9
example-app-selenium-1      | 2023-08-31 02:28:58,290 INFO spawned: 'xvfb' with pid 11
example-app-selenium-1      | 2023-08-31 02:28:58,294 INFO spawned: 'vnc' with pid 12
example-app-selenium-1      | 2023-08-31 02:28:58,296 INFO spawned: 'novnc' with pid 13
example-app-selenium-1      | 2023-08-31 02:28:58,299 INFO spawned: 'selenium-standalone' with pid 14
example-app-selenium-1      | 2023-08-31 02:28:59,267 INFO success: xvfb entered RUNNING state, process has stayed up for > than 0 seconds (startsecs)
example-app-selenium-1      | 2023-08-31 02:28:59,267 INFO success: vnc entered RUNNING state, process has stayed up for > than 0 seconds (startsecs)
example-app-selenium-1      | 2023-08-31 02:28:59,267 INFO success: novnc entered RUNNING state, process has stayed up for > than 0 seconds (startsecs)
example-app-selenium-1      | 2023-08-31 02:28:59,267 INFO success: selenium-standalone entered RUNNING state, process has stayed up for > than 0 seconds (startsecs)
example-app-selenium-1      | Setting up SE_NODE_GRID_URL...
example-app-meilisearch-1   | [2023-08-31T02:29:10Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000220
example-app-selenium-1      | Selenium Grid Standalone configuration:
example-app-selenium-1      | [network]
example-app-selenium-1      | relax-checks = true
example-app-selenium-1      |
example-app-selenium-1      | [node]
example-app-selenium-1      | session-timeout = "300"
example-app-selenium-1      | override-max-sessions = false
example-app-selenium-1      | detect-drivers = false
example-app-selenium-1      | drain-after-session-count = 0
example-app-selenium-1      | max-sessions = 1
example-app-selenium-1      |
example-app-selenium-1      | [[node.driver-configuration]]
example-app-selenium-1      | display-name = "chrome"
example-app-selenium-1      | stereotype = '{"browserName": "chrome", "browserVersion": "115.0", "platformName": "Linux"}'
example-app-selenium-1      | max-sessions = 1
example-app-selenium-1      |
example-app-selenium-1      |
example-app-selenium-1      | Starting Selenium Grid Standalone...
example-app-selenium-1      | Tracing is disabled
example-app-laravel.test-1  |
example-app-laravel.test-1  |    INFO  Server running on [http://0.0.0.0:80].
example-app-laravel.test-1  |
example-app-laravel.test-1  |   Press Ctrl+C to stop the server
example-app-laravel.test-1  |
example-app-laravel.test-1  |
example-app-meilisearch-1   | [2023-08-31T02:30:16Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000178
example-app-mysql-1         | 2023-08-31T02:30:23.309301Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
example-app-selenium-1      | 02:30:46.657 INFO [LoggingOptions.configureLogEncoding] - Using the system default encoding
example-app-selenium-1      | 02:30:46.889 INFO [OpenTelemetryTracer.createTracer] - Using OpenTelemetry for tracing
example-app-meilisearch-1   | [2023-08-31T02:30:47Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.221804
example-app-meilisearch-1   | [2023-08-31T02:31:19Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000373
example-app-selenium-1      | 02:31:26.729 INFO [NodeOptions.getSessionFactories] - Detected 8 available processors
example-app-selenium-1      | 02:31:28.272 INFO [NodeOptions.report] - Adding chrome for {"browserName": "chrome","browserVersion": "115.0","platformName": "linux","se:noVncPort": 7900,"se:vncEnabled": true} 1 times
example-app-selenium-1      | 02:31:29.785 INFO [Node.<init>] - Binding additional locator mechanisms: relative
example-app-selenium-1      | 02:31:30.142 INFO [GridModel.setAvailability] - Switching Node 19672fb9-9233-4339-a0f4-2a8cbe3faca9 (uri: http://172.18.0.2:4444) from DOWN to UP
example-app-selenium-1      | 02:31:30.143 INFO [LocalDistributor.add] - Added node 19672fb9-9233-4339-a0f4-2a8cbe3faca9 at http://172.18.0.2:4444. Health check every 120s
example-app-selenium-1      | 02:31:41.750 INFO [Standalone.execute] - Started Selenium Standalone 4.11.0 (revision 040bc5406b): http://172.18.0.2:4444
example-app-meilisearch-1   | [2023-08-31T02:31:50Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000126
example-app-meilisearch-1   | [2023-08-31T02:32:22Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000192
example-app-meilisearch-1   | [2023-08-31T02:32:53Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000170
example-app-mysql-1         | 2023-08-31T02:33:14.900609Z 6 [Warning] [MY-010453] [Server] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
example-app-meilisearch-1   | [2023-08-31T02:33:24Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000160
example-app-meilisearch-1   | [2023-08-31T02:33:55Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000200
example-app-meilisearch-1   | [2023-08-31T02:34:26Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000134
example-app-meilisearch-1   | [2023-08-31T02:34:57Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000159
example-app-meilisearch-1   | [2023-08-31T02:35:28Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000152
example-app-meilisearch-1   | [2023-08-31T02:35:59Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000216
example-app-meilisearch-1   | [2023-08-31T02:36:30Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000184
example-app-mysql-1         | [Entrypoint] Database initialized
example-app-mysql-1         | 2023-08-31T02:36:39.035382Z 0 [Warning] [MY-011068] [Server] The syntax '--skip-host-cache' is deprecated and will be removed in a future release. Please use SET GLOBAL host_cache_size=0 instead.
example-app-mysql-1         | 2023-08-31T02:36:39.096716Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.0.32) starting as process 158
example-app-mysql-1         | 2023-08-31T02:36:40.119165Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
example-app-mysql-1         | 2023-08-31T02:36:53.358362Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
example-app-mysql-1         | 2023-08-31T02:37:00.566970Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
example-app-mysql-1         | 2023-08-31T02:37:00.567048Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
example-app-mysql-1         | 2023-08-31T02:37:00.896110Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Socket: /var/run/mysqld/mysqlx.sock
example-app-mysql-1         | 2023-08-31T02:37:00.896170Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.0.32'  socket: '/var/lib/mysql/mysql.sock'  port: 0  MySQL Community Server - GPL.
example-app-meilisearch-1   | [2023-08-31T02:37:01Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000180
example-app-mysql-1         | Warning: Unable to load '/usr/share/zoneinfo/iso3166.tab' as time zone. Skipping it.
example-app-mysql-1         | Warning: Unable to load '/usr/share/zoneinfo/leapseconds' as time zone. Skipping it.
example-app-meilisearch-1   | [2023-08-31T02:37:32Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000124
example-app-mysql-1         | Warning: Unable to load '/usr/share/zoneinfo/tzdata.zi' as time zone. Skipping it.
example-app-mysql-1         | Warning: Unable to load '/usr/share/zoneinfo/zone.tab' as time zone. Skipping it.
example-app-mysql-1         | Warning: Unable to load '/usr/share/zoneinfo/zone1970.tab' as time zone. Skipping it.
example-app-mysql-1         |
example-app-mysql-1         |
example-app-mysql-1         | [Entrypoint] running /docker-entrypoint-initdb.d/10-create-testing-database.sh
example-app-mysql-1         | mysql: [Warning] Using a password on the command line interface can be insecure.
example-app-mysql-1         |
example-app-mysql-1         |
example-app-mysql-1         | 2023-08-31T02:38:02.408943Z 17 [System] [MY-013172] [Server] Received SHUTDOWN from user root. Shutting down mysqld (Version: 8.0.32).
example-app-meilisearch-1   | [2023-08-31T02:38:02Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000163
example-app-meilisearch-1   | [2023-08-31T02:38:33Z INFO  actix_web::middleware::logger] 127.0.0.1 "GET /health HTTP/1.1" 200 22 "-" "Wget" 0.000143
example-app-mysql-1         | 2023-08-31T02:38:49.592209Z 0 [System] [MY-010910] [Server] /usr/sbin/mysqld: Shutdown complete (mysqld 8.0.32)  MySQL Community Server - GPL.
example-app-mysql-1         | [Entrypoint] Server shut down
example-app-mysql-1         |
example-app-mysql-1         |
example-app-mysql-1         | [Entrypoint] MySQL init process done. Ready for start up.
example-app-mysql-1         |
example-app-mysql-1         |
example-app-mysql-1         | [Entrypoint] Starting MySQL 8.0.32-1.2.11-server
example-app-mysql-1         | 2023-08-31T02:38:51.153849Z 0 [Warning] [MY-011068] [Server] The syntax '--skip-host-cache' is deprecated and will be removed in a future release. Please use SET GLOBAL host_cache_size=0 instead.
{% endhighlight %}
