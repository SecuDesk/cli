`secudesk integration`
======================

SecuDesk Integrations management

* [`secudesk integration create`](#secudesk-integration-create)
* [`secudesk integration delete`](#secudesk-integration-delete)
* [`secudesk integration list`](#secudesk-integration-list)
* [`secudesk integration login`](#secudesk-integration-login)
* [`secudesk integration logout`](#secudesk-integration-logout)
* [`secudesk integration sync`](#secudesk-integration-sync)

## `secudesk integration create`

Create a new integration

```
USAGE
  $ secudesk integration create [--integrationAlias <value>] [--integrationPortalUrl <value>] [--integrationRegion
    <value>] [--integrationType AWS-SSO|AZURE] [--integrationTenantId <value>] [--integrationLocation <value>]

FLAGS
  --integrationAlias=<value>      alias that identifies an integration
  --integrationLocation=<value>   Location of an Azure Integration
  --integrationPortalUrl=<value>  url that identifies the integration portal where you authenticate
  --integrationRegion=<value>     an AWS valid region code for the integration
  --integrationTenantId=<value>   Tenant ID of an Azure Integration
  --integrationType=<option>      Identify the type of your integration. Valid types are [AWS-SSO, AZURE]
                                  <options: AWS-SSO|AZURE>

DESCRIPTION
  Create a new integration

EXAMPLES
  $leapp integration create

  $leapp integration create --integrationType AWS-SSO --integrationAlias ALIAS --integrationPortalUrl URL --integrationRegion REGION

  $leapp integration create --integrationType AZURE --integrationAlias ALIAS --integrationTenantId TENANT --integrationLocation LOCATION
```

## `secudesk integration delete`

Delete an integration

```
USAGE
  $ secudesk integration delete [--integrationId <value>]

FLAGS
  --integrationId=<value>  the Integration Id used to identify the integration inside Leapp

DESCRIPTION
  Delete an integration

EXAMPLES
  $leapp integration delete

  $leapp integration delete --integrationId ID
```

## `secudesk integration list`

Show integrations list

```
USAGE
  $ secudesk integration list [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output csv|json|yaml | 
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
  Show integrations list

EXAMPLES
  $leapp integration list
```

## `secudesk integration login`

Login to synchronize integration sessions

```
USAGE
  $ secudesk integration login [--integrationId <value>]

FLAGS
  --integrationId=<value>  the Integration Id used to identify the integration inside Leapp

DESCRIPTION
  Login to synchronize integration sessions

EXAMPLES
  $leapp integration login

  $leapp integration login --integrationId ID
```

## `secudesk integration logout`

Logout from an integration

```
USAGE
  $ secudesk integration logout [--integrationId <value>]

FLAGS
  --integrationId=<value>  the Integration Id used to identify the integration inside Leapp

DESCRIPTION
  Logout from an integration

EXAMPLES
  $leapp integration logout

  $leapp integration logout --integrationId ID
```

## `secudesk integration sync`

Synchronize integration sessions

```
USAGE
  $ secudesk integration sync [--integrationId <value>]

FLAGS
  --integrationId=<value>  the Integration Id used to identify the integration inside Leapp

DESCRIPTION
  Synchronize integration sessions

EXAMPLES
  $leapp integration sync

  $leapp integration sync --integrationId ID
```
