`secudesk profile`
==================

SecuDesk AWS Multi-profile management

* [`secudesk profile create`](#secudesk-profile-create)
* [`secudesk profile delete`](#secudesk-profile-delete)
* [`secudesk profile edit`](#secudesk-profile-edit)
* [`secudesk profile list`](#secudesk-profile-list)

## `secudesk profile create`

Create a new AWS named profile

```
USAGE
  $ secudesk profile create [--profileName <value>]

FLAGS
  --profileName=<value>  an AWS named profile Alias used to identify the profile in both config and credential file

DESCRIPTION
  Create a new AWS named profile

EXAMPLES
  $leapp profile create

  $leapp profile create --profileName PROFILENAME
```

## `secudesk profile delete`

Delete an AWS named profile

```
USAGE
  $ secudesk profile delete [--profileId <value>] [-f]

FLAGS
  -f, --force          force a command without asking for confirmation (-f, --force)
  --profileId=<value>  an AWS named profile ID in Leapp

DESCRIPTION
  Delete an AWS named profile

EXAMPLES
  $leapp profile delete

  $leapp profile delete --profileId PROFILEID

  $leapp profile delete --profileId PROFILEID [--force, -f]
```

## `secudesk profile edit`

Rename an AWS named profile

```
USAGE
  $ secudesk profile edit [--profileId <value>] [--profileName <value>]

FLAGS
  --profileId=<value>    an AWS named profile ID in Leapp
  --profileName=<value>  an AWS named profile Alias used to identify the profile in both config and credential file

DESCRIPTION
  Rename an AWS named profile

EXAMPLES
  $leapp profile edit

  $leapp profile edit --profileId ID --profileName PROFILENAME
```

## `secudesk profile list`

Show profile list

```
USAGE
  $ secudesk profile list [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml | 
    | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)

DESCRIPTION
  Show profile list

EXAMPLES
  $leapp profile list
```
