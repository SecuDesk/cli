`secudesk region`
=================

SecuDesk regions management

* [`secudesk region get-default`](#secudesk-region-get-default)
* [`secudesk region set-default`](#secudesk-region-set-default)

## `secudesk region get-default`

Displays the default region

```
USAGE
  $ secudesk region get-default

DESCRIPTION
  Displays the default region

EXAMPLES
  $leapp region get-default
```

## `secudesk region set-default`

Change the default region

```
USAGE
  $ secudesk region set-default [--region <value>]

FLAGS
  --region=<value>  Session Region for AWS sessions in Leapp

DESCRIPTION
  Change the default region

EXAMPLES
  $leapp region set-default

  $leapp region set-default --region AWSREGION
```
