# Vercel

Vercel is a platform for frontend frameworks and static sites, enabling developers to host websites and web services that deploy instantly, scale automatically, and require minimal configuration.

- **Category:** developer tools
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** No
- **Tools:** 147
- **Triggers:** 0
- **Slug:** `VERCEL`
- **Version:** 20260915_00

## Tools

### Add Environment Variable

**Slug:** `VERCEL_ADD_ENVIRONMENT_VARIABLE`

Tool to add an environment variable to a Vercel project. Variables only take effect in subsequent deployments — already-running deployments are not updated. Use after confirming the project exists and you need to configure secrets or configuration values across environments before deployment. Example: "Add API_KEY=secret to production".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Name of the environment variable |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `type` | string ("plain" | "encrypted" | "sensitive") | Yes | Type of the variable storage: 'plain' (non-sensitive values), 'encrypted' (standard encrypted values visible to project users), or 'sensitive' (values that are non-readable once created, only decrypted during builds). NOTE: 'sensitive' type variables can only target 'production' and 'preview' environments - 'development' is not allowed. |
| `value` | string | Yes | Value of the environment variable |
| `target` | array | Yes | List of environments where this variable should be available. Must be provided as a list even for a single environment. Valid values: 'production', 'preview', 'development'. NOTE: When type='sensitive', 'development' is NOT allowed - only 'production' and 'preview' are valid targets for sensitive variables. |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `upsert` | boolean | No | If true, overwrite existing variables with the same key Silently overwrites without confirmation — only set true when user has explicitly confirmed the existing value should be replaced. |
| `comment` | string | No | Optional comment for context |
| `idOrName` | string | Yes | The unique identifier or name of the project |
| `gitBranch` | string | No | Git branch to scope this variable to |
| `customEnvironmentIds` | array | No | List of custom environment identifiers. Must be provided as a list even for a single ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Domain to Project

**Slug:** `VERCEL_ADD_PROJECT_DOMAIN`

Tool to attach a custom domain to a Vercel project. Use when you need to add a domain to a project for production or branch-specific deployments. After adding, the domain must be verified by completing the verification challenges returned in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The domain name to add to the project (e.g., 'www.example.com', 'app.mydomain.com') |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrName` | string | Yes | The unique project identifier or project name |
| `redirect` | string | No | Target destination domain for redirection. **PREREQUISITE: The target domain must already be added to the project first** (call this action without redirect parameters to add the target domain, then call again with redirect parameters to add the redirecting domain). When set, requests to this domain will redirect to the specified target domain. IMPORTANT: Cannot be used together with 'git_branch' - these are mutually exclusive domain configuration modes. |
| `gitBranch` | string | No | Git branch to associate with this domain. When set, deployments from this branch will be accessible via this domain. Maximum 250 characters. IMPORTANT: Cannot be used together with 'redirect' or 'redirect_status_code' - these are mutually exclusive domain configuration modes. |
| `redirectStatusCode` | integer ("301" | "302" | "307" | "308") | No | HTTP status code for redirect. Required when 'redirect' is set. 301: Permanent redirect (cached by browsers), 302: Temporary redirect, 307: Temporary redirect (preserves method), 308: Permanent redirect (preserves method). IMPORTANT: Cannot be used together with 'git_branch' - these are mutually exclusive domain configuration modes. |
| `customEnvironmentId` | string | No | Custom environment identifier within the project to associate with this domain |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assign Alias to Deployment

**Slug:** `VERCEL_ASSIGN_ALIAS`

Tool to assign an alias to a specific Vercel deployment. Use when you need to associate a custom domain or subdomain with a deployment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the deployment to assign the alias to |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `alias` | string | Yes | The alias we want to assign to the deployment |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `redirect` | string | No | The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Batch Remove Project Environment Variables

**Slug:** `VERCEL_BATCH_REMOVE_PROJECT_ENV`

Tool to batch remove environment variables from a Vercel project. Use when you need to delete multiple environment variables at once. More efficient than deleting variables one by one when removing multiple variables.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of environment variable IDs to delete. Must contain at least 1 and at most 1000 IDs. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier or the project name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Buy Domains

**Slug:** `VERCEL_BUY_DOMAINS`

Tool to purchase multiple domains through Vercel's domain registrar. Use when registering new domains after checking availability and price. Important: Always check domain availability and price before attempting purchase. Some TLDs may require additional contact information fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `domains` | array | Yes | List of domains to purchase. Must contain at least one domain. |
| `contactInformation` | object | Yes | Contact information for domain registration. Some TLDs may require additional fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Buy Single Domain

**Slug:** `VERCEL_BUY_SINGLE_DOMAIN`

Tool to purchase a domain through Vercel's domain registrar. Use when you need to register and buy a domain after confirming availability and pricing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `years` | integer | Yes | Number of years to register the domain for |
| `domain` | string | Yes | The fully qualified domain name to purchase (e.g., example.com) |
| `teamId` | string | No | Optional team ID to purchase the domain on behalf of a team |
| `autoRenew` | boolean | Yes | Whether the domain should be automatically renewed before it expires. Can be configured later via the Vercel Dashboard or API. |
| `expectedPrice` | number | Yes | Expected price in USD for the domain purchase. Use check_domain_price to get current pricing. |
| `contactInformation` | object | Yes | Contact information for domain registration. Some TLDs require additional fields - use get_contact_info_schema endpoint to check requirements. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Artifact Exists

**Slug:** `VERCEL_CHECK_CACHE_ARTIFACT_EXISTS`

Tool to check if a cache artifact exists by its hash. Use when verifying whether a cache artifact is already stored before upload or when validating artifact availability.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hash` | string | Yes | The artifact hash to check for existence. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Domain Availability

**Slug:** `VERCEL_CHECK_DOMAIN_AVAILABILITY`

Tool to check if a domain is available for registration. Read-only: does not reserve or purchase the domain. Use when you need to verify domain availability before purchase. Response field `available=false` means the domain is taken (not an error); actual failures return HTTP 4xx. IMPORTANT: Vercel only supports specific TLDs. Common supported TLDs include: .com, .net, .org, .io, .co, .dev, .app, .ai, .xyz, .me. Some TLDs are NOT supported (e.g., .cam, .berlin, .wales). For the full list, see: https://vercel.com/docs/domains/supported-domains

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Optional team slug to perform the request on behalf of. |
| `domain` | string | Yes | The domain name to check for availability (e.g., 'example.com'). Can also be passed as 'domain'. IMPORTANT: Only domains with Vercel-supported TLDs can be checked. Common supported TLDs include: .com, .net, .org, .io, .co, .dev, .app, .ai, .xyz, .me, .info, .biz, .tech, .online, .site, .store, .shop, .cloud, .digital, .agency, .design, .studio, .solutions, .systems, .tools, .world, .today, .life, .plus, .one, .pro, .zone, .team, .works, .page, .email, .link, .global, .live, .network, .services, .software, .technology. Some TLDs are NOT supported (e.g., .cam, .berlin, .wales). For the complete list of 500+ supported TLDs, see: https://vercel.com/docs/domains/supported-domains |
| `teamId` | string | No | Optional team identifier to perform the request on behalf of. Can also be passed as 'team'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Domain Price (Deprecated)

**Slug:** `VERCEL_CHECK_DOMAIN_PRICE`

DEPRECATED: Use VERCEL_CHECK_DOMAIN_PRICE2 instead. Tool to check the price for a domain before purchase. Use when evaluating cost and availability prior to domain registration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `years` | integer | No | Number of years to get pricing for. If omitted, uses the minimum years for the TLD. |
| `domain` | string | Yes | Fully qualified domain name to check price for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Domain Price

**Slug:** `VERCEL_CHECK_DOMAIN_PRICE2`

Check pricing for a domain including purchase, renewal, and transfer costs. Use this to evaluate the cost of registering, renewing, or transferring a domain via Vercel. Returns pricing for the specified domain and time period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `years` | integer | No | The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used (typically 1 year). |
| `domain` | string | Yes | The domain name to check pricing for (e.g., 'example.com', 'mysite.io'). |
| `teamId` | string | No | The Team identifier to perform the request on behalf of (e.g., 'team_1a2b3c4d5e6f7g8h9i0j1k2l'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Auth Token

**Slug:** `VERCEL_CREATE_AUTH_TOKEN`

Tool to create a new authentication token. Use when you need to programmatically generate a new auth token with optional expiration. Returns both token metadata and the bearer token value (only provided once).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The human-readable name of the token. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `expiresAt` | integer | No | Timestamp (in milliseconds) of when the token expires. Must be within 2 years from now. If not provided, the token will not expire. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Deployment

**Slug:** `VERCEL_CREATE_DEPLOYMENT`

DEPRECATED: Use VERCEL_CREATE_NEW_DEPLOYMENT instead. Create a new deployment on Vercel. Deploys static files or connects to a Git repository. **File-based deployments**: Provide `name` and `files` array with file content (inline HTML/CSS/JS). **Git-based deployments**: Provide `name` and `gitSource` with repository details. IMPORTANT: Always provide either `slug` (team slug) or `teamId` (team ID starting with 'team_') to specify the team context. Use VERCEL_GET_TEAMS to find the correct team slug. Example minimal file deployment: { "name": "my-project", "slug": "my-team", "files": [{"file": "index.html", "data": "<html><body>Hello World</body></html>"}] }

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | No | An object containing the deployment's metadata. Multiple key-value pairs can be attached to a deployment |
| `name` | string | Yes | A string with the project name used in the deployment URL |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `files` | array | No | A list of objects with the files to be deployed. Required if not using gitSource. |
| `target` | string ("production" | "staging") | No | Either not defined, `staging`, `production`, or a custom environment identifier. If `staging`, a staging alias in the format `<project>-<team>.vercel.app` will be assigned. If `production`, any aliases defined in `alias` will be assigned. If omitted, the target will be `preview`. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `project` | string | No | The target project identifier in which the deployment will be created. When defined, this parameter overrides name |
| `forceNew` | string ("0" | "1") | No | Forces a new deployment even if there is a previous similar deployment |
| `gitSource` | object | No | Git source information for git-based deployments. |
| `gitMetadata` | object | No | Git metadata for the deployment. |
| `deploymentId` | string | No | An deployment id for an existing deployment to redeploy |
| `monorepoManager` | string | No | The monorepo manager that is being used for this deployment. When `null` is used no monorepo manager is selected |
| `projectSettings` | object | No | Project settings for the deployment. |
| `withLatestCommit` | boolean | No | When `true` and `deploymentId` is passed in, the sha from the previous deployment's `gitSource` is removed forcing the latest commit to be used. |
| `customEnvironmentSlugOrId` | string | No | Deploy to a custom environment, which will override the default environment |
| `skipAutoDetectionConfirmation` | string ("0" | "1") | No | Allows to skip framework detection so the API would not fail to ask for confirmation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create DNS Record

**Slug:** `VERCEL_CREATE_DNS_RECORD`

Tool to create a new DNS record for a domain. Use when you need to add DNS records such as A, AAAA, CNAME, MX, TXT, SRV, or other record types to a domain managed in Vercel.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `srv` | object | No | Configuration for SRV record type. |
| `ttl` | integer | No | The Time to live (TTL) value of the DNS record in seconds. Must be between 60 and 2147483647. If not specified, a default TTL will be used. |
| `name` | string | Yes | The name/subdomain for the DNS record. Use '@' for the root domain or provide a subdomain like 'www' or 'api'. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `type` | string ("A" | "AAAA" | "ALIAS" | "CAA" | "CNAME" | "HTTPS" | "MX" | "SRV" | "TXT" | "NS") | Yes | The type of DNS record to create |
| `https` | object | No | Configuration for HTTPS record type. |
| `value` | string | No | The value of the DNS record. Required for A, AAAA, ALIAS, CAA, CNAME, MX, TXT, and NS record types. Not used for SRV and HTTPS records which use their respective config objects. |
| `domain` | string | Yes | The domain used to create the DNS record (e.g., 'example.com') |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `comment` | string | No | A comment to add context on what this DNS record is for. Maximum 500 characters. |
| `mxPriority` | integer | No | The MX priority value. Required when record type is MX. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Edge Config

**Slug:** `VERCEL_CREATE_EDGE_CONFIG`

Creates a new Edge Config for storing key-value data at the edge. Edge Configs enable ultra-low latency data reads from Vercel's edge network. Use this to store feature flags, A/B test configurations, or other data that needs to be read quickly from edge functions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | Unique slug identifier for the Edge Config. Can only contain alphanumeric characters, underscores (_) and hyphens (-). Maximum 64 characters. |
| `items` | object | No | Optional initial key-value items to populate the Edge Config. Each key should be a string and values can be any JSON-serializable type. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. Required if the Edge Config belongs to a team. |
| `teamSlug` | string | No | The Team URL slug to perform the request on behalf of. Alternative to teamId. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Edge Config Token

**Slug:** `VERCEL_CREATE_EDGE_CONFIG_TOKEN`

Create a read access token for a specific Edge Config. The generated token is used to authenticate against the Edge Config's endpoint for high-volume, low-latency read operations. Use this when you need to grant read access to an Edge Config from your application.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `label` | string | Yes | A label for the token to help identify its purpose (max length 52 characters). |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `edgeConfigId` | string | Yes | The unique identifier of the Edge Config for which the token is being created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create new deployment

**Slug:** `VERCEL_CREATE_NEW_DEPLOYMENT`

Tool to create a new deployment. Use when you need to deploy files or a Git commit to a Vercel project. Example for file deployment: { "name": "my-app", "files": [ {"file": "index.html", "data": "<html><body>Hello World</body></html>"}, {"file": "style.css", "data": "body { font-family: Arial; }"} ], "target": "production" } Example for Git source deployment (deploy from GitHub branch - uses latest commit): { "name": "my-app", "gitSource": { "type": "github", "repoId": "668449998", "ref": "main" } } Example for Git source deployment (deploy specific commit): { "name": "my-app", "gitSource": { "type": "github", "repoId": "668449998", "ref": "main", "sha": "a1b2c3d4e5f6g7h8i9j0" } } Note: repoId must be the numeric GitHub repository ID (NOT 'owner/repo'). Get it via: GET https://api.github.com/repos/{owner}/{repo} -> use the 'id' field. Example for redeployment: { "deploymentId": "dpl_Br7FSrRXuUkSHj7t7GVVadyuGvFg", "target": "production" }

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | No | User-defined metadata key/value pairs |
| `name` | string | Yes | Name for the deployment. Required by API - must be non-null. |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `files` | array | No | List of files for non-git deployments. Required if no gitSource is provided (gitMetadata alone is insufficient). |
| `target` | string ("production" | "staging") | No | Deployment target environment |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `project` | string | No | Project ID or name to deploy to. Note: Providing a project ID alone is not sufficient - you must also provide deployment source (files, gitSource, or deploymentId). |
| `forceNew` | string ("0" | "1") | No | Forces a new deployment even if there is a previous similar deployment |
| `gitSource` | object | No | Git source information for git-based deployments |
| `gitMetadata` | object | No | Git commit metadata for git-based deployments |
| `deploymentId` | string | No | Specify an existing deployment ID to redeploy the same version |
| `projectSettings` | object | No | Project-specific build settings (buildCommand, installCommand, devCommand, outputDirectory, rootDirectory, framework). If not provided or all fields are None, skipAutoDetectionConfirmation=1 is automatically enabled for framework auto-detection. |
| `skipAutoDetectionConfirmation` | string ("0" | "1") | No | Allows skipping framework detection confirmation. Required for new projects if projectSettings is not provided |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create or Transfer Domain

**Slug:** `VERCEL_CREATE_OR_TRANSFER_DOMAIN`

Tool to add an existing domain to the Vercel platform. Use when you need to add a domain to Vercel for DNS management or transfer a domain. Supports two methods: 'add' for adding existing domains and 'move-in' for transferring domains (requires authorization token).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The domain name to add or transfer (e.g., 'example.com') |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `zone` | boolean | No | Whether to create a DNS zone for the domain. Only applicable when method is 'add'. |
| `token` | string | No | Authorization token required when method is 'move-in' for domain transfer. Not used for 'add' method. |
| `method` | string | No | The domain operation to perform. Use 'add' to add an existing domain or 'move-in' to transfer a domain. When using 'move-in', the 'token' field is required. If not specified, defaults to 'add'. |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `cdnEnabled` | boolean | No | Whether to enable CDN for the domain. Only applicable when method is 'add'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Vercel Project (Deprecated)

**Slug:** `VERCEL_CREATE_PROJECT`

DEPRECATED: Use VERCEL_VERCEL_CREATE_PROJECT2 instead. Tool to create a new Vercel project. Use when automating project provisioning in CI/CD before deployment. Project names must be unique per team; duplicate names cause 409 conflicts — check for existing projects first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Project name. Must be lowercase, up to 100 characters, and can only contain alphanumeric characters (a-z, 0-9) and hyphens (-). Cannot contain '---' sequence. Spaces and uppercase letters will be automatically converted (spaces to hyphens, uppercase to lowercase), and other invalid characters will be removed. |
| `slug` | string | No | Team slug to run the request on behalf of |
| `teamId` | string | No | Team identifier to run the request on behalf of |
| `gitRepository` | object | No | Git repository configuration for automatic deployments. |
| `skipGitConnectDuringLink` | boolean | No | When true, skips the Git connect prompt during project linking in the CLI. |
| `composio_execution_message` | string | No | Message explaining any automatic transformations applied to user input |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Vercel Project (v2)

**Slug:** `VERCEL_CREATE_PROJECT2`

Tool to create a new Vercel project with comprehensive configuration options. Use when you need to create a project with specific settings like environment variables, framework selection, Git repository connection, resource configuration, or deployment policies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The desired name for the project. Must be lowercase and can only contain letters, digits, '.', '_', and '-'. Cannot contain the sequence '---'. Maximum 100 characters. |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `framework` | string ("blitzjs" | "nextjs" | "gatsby" | "remix" | "react-router" | "astro" | "hexo" | "eleventy" | "docusaurus-2" | "docusaurus" | "preact" | "solidstart-1" | "solidstart" | "dojo" | "ember" | "vue" | "scully" | "ionic-angular" | "angular" | "polymer" | "svelte" | "sveltekit" | "sveltekit-1" | "ionic-react" | "create-react-app" | "gridsome" | "umijs" | "sapper" | "saber" | "stencil" | "nuxtjs" | "redwoodjs" | "hugo" | "jekyll" | "brunch" | "middleman" | "zola" | "hydrogen" | "vite" | "tanstack-start" | "vitepress" | "vuepress" | "parcel" | "fastapi" | "flask" | "fasthtml" | "sanity-v3" | "sanity" | "storybook" | "nitro" | "hono" | "express" | "h3" | "nestjs" | "elysia" | "fastify" | "xmcp") | No | The framework being used for this project. When null, no framework is selected |
| `devCommand` | string | No | The dev command for this project. When null is used, this value will be automatically detected |
| `buildCommand` | string | No | The build command for this project. When null is used, this value will be automatically detected |
| `publicSource` | boolean | No | Specifies whether the source code and logs of the deployments for this project should be public or not |
| `gitRepository` | object | No | Git repository configuration for automatic deployments. |
| `rootDirectory` | string | No | The name of a directory or relative path to the source code. When null, it will default to the project root |
| `ssoProtection` | object | No | SSO protection configuration for the project. |
| `installCommand` | string | No | The install command for this project. When null is used, this value will be automatically detected |
| `resourceConfig` | object | No | Resource override configuration for the project. |
| `oidcTokenConfig` | object | No | OpenID Connect JSON Web Token generation configuration. |
| `outputDirectory` | string | No | The output directory of the project. When null is used, this value will be automatically detected |
| `environmentVariables` | array | No | Collection of environment variables the project will use |
| `enablePreviewFeedback` | boolean | No | Opt-in to preview toolbar on the project level |
| `previewDeploymentSuffix` | string | No | Custom domain suffix for preview deployments. Must be a domain owned by the team |
| `enableProductionFeedback` | boolean | No | Opt-in to production toolbar on the project level |
| `serverlessFunctionRegion` | string | No | The region to deploy Serverless Functions in this project |
| `skipGitConnectDuringLink` | boolean | No | Opts-out of the message prompting a CLI user to connect a Git repository in vercel link |
| `previewDeploymentsDisabled` | boolean | No | Specifies whether preview deployments are disabled for this project |
| `commandForIgnoringBuildStep` | string | No | Command to determine whether to skip the build step |
| `enableAffectedProjectsDeployments` | boolean | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `serverlessFunctionZeroConfigFailover` | boolean | No | Specifies whether Zero Config Failover is enabled for this project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Project Environment Variables (Deprecated)

**Slug:** `VERCEL_CREATE_PROJECT_ENV`

DEPRECATED: Use VERCEL_ADD_ENVIRONMENT_VARIABLE instead. Tool to create environment variables in a Vercel project. Use when you need to configure secrets or configuration values across environments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Name of the environment variable |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `type` | string ("plain" | "encrypted" | "sensitive") | Yes | Type of the variable storage: 'plain' (non-sensitive values), 'encrypted' (standard encrypted values visible to project users), or 'sensitive' (values that are non-readable once created, only decrypted during builds). Note: 'sensitive' type can only target 'production' and 'preview' environments, NOT 'development'. |
| `value` | string | Yes | Value of the environment variable |
| `target` | array | No | List of environments where this variable should be available. Valid values: 'production', 'preview', 'development'. Note: When type is 'sensitive', 'development' is not allowed and will be automatically removed. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `upsert` | string | No | Set to 'true' to update an existing environment variable instead of failing with ENV_CONFLICT. When creating a variable that may already exist, use upsert='true' to overwrite its value. |
| `comment` | string | No | Optional comment for context |
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `gitBranch` | string | No | Git branch to scope this variable to |
| `customEnvironmentIds` | array | No | List of custom environment identifiers |
| `_sensitive_dev_removed` | boolean | No | Internal flag: True if 'development' was auto-removed from target for sensitive type |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Project Transfer Request

**Slug:** `VERCEL_CREATE_PROJECT_TRANSFER_REQUEST`

Tool to create a project transfer request. Use when you need to initiate a transfer of a Vercel project to another account or team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The ID or name of the project to transfer. |
| `callbackUrl` | string | No | The URL to send a webhook to when the transfer is accepted. |
| `callbackSecret` | string | No | The secret to use to sign the webhook payload with HMAC-SHA256. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Shared Environment Variable

**Slug:** `VERCEL_CREATE_SHARED_ENV_VARIABLE`

Tool to create one or more shared environment variables in Vercel. Use when you need to create environment variables that can be shared across multiple projects or applied to specific target environments. Supports creating 1-50 variables in a single request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `evs` | array | Yes | Array of environment variables to create (minimum 1, maximum 50) |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `type` | string ("encrypted" | "sensitive") | No | Type of environment variable storage: 'encrypted' (standard encrypted values visible to users) or 'sensitive' (values that are non-readable once created). Defaults to 'encrypted' if not specified. |
| `target` | array | No | Target environments where the variable should be available. Required if applyToAllCustomEnvironments is not set. Valid values: 'production', 'preview', 'development' |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `projectId` | array | No | Associate the shared environment variable with specific projects by providing a list of project IDs |
| `applyToAllCustomEnvironments` | boolean | No | Apply the environment variable to all custom environments. Required if target is not set. Cannot be used together with target. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook

**Slug:** `VERCEL_CREATE_WEBHOOK`

Tool to create a webhook for receiving notifications about Vercel events. Use when you need to set up automated responses to deployment, domain, project, or other Vercel events.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL to call when the webhook is triggered. Must start with http:// or https:// |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `events` | array | Yes | List of event types that should trigger this webhook. At least one event is required. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectIds` | array | No | Optional list of project IDs to scope the webhook to specific projects. Minimum 1, maximum 50 project IDs. Each project ID must contain only alphanumeric characters and underscores. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Dangerously Delete By Source Images

**Slug:** `VERCEL_DANGEROUSLY_DELETE_BY_SRC_IMAGES`

Tool to dangerously delete edge cache by source image URLs. Use when you need to invalidate cached images from the edge network for a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `srcImages` | array | Yes | List of source image URLs to delete from edge cache. Must contain 1-8 URLs, each up to 8192 characters. |
| `projectIdOrName` | string | Yes | The unique identifier or name of the project. |
| `revalidationDeadlineSeconds` | number | No | Optional deadline in seconds for revalidation. Must be non-negative. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Dangerously Delete Cache By Tags

**Slug:** `VERCEL_DANGEROUSLY_DELETE_BY_TAGS`

Tool to dangerously delete edge cache by tags. Use when you need to purge cached content for specific cache tags in a Vercel project. WARNING: This permanently deletes cached content and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `tags` | string | Yes | Cache tags to purge. Can be a single tag string or a list of tag strings. All cached content matching these tags will be permanently deleted. |
| `target` | string ("production" | "preview") | No | Target environment to purge cache from. Either 'production' or 'preview'. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectIdOrName` | string | Yes | The project ID or name to purge cache for. This is required and must be a valid project identifier. |
| `revalidationDeadlineSeconds` | number | No | Optional deadline in seconds for revalidation. Must be non-negative. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Vercel Alias

**Slug:** `VERCEL_DELETE_ALIAS`

Tool to delete an alias from Vercel. Use when you need to remove a deployment alias or custom domain alias after confirming the alias ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `aliasId` | string | Yes | The ID or alias that will be removed. This is the unique identifier of the alias to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Auth Token

**Slug:** `VERCEL_DELETE_AUTH_TOKEN`

Tool to delete an authentication token. Use when you need to revoke a token programmatically after confirming its validity. Example: "Delete auth token with id abc123"

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tokenId` | string | Yes | The identifier of the token to invalidate. Use 'current' to invalidate the token used for this request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Purge All Data Cache

**Slug:** `VERCEL_DELETE_DATA_CACHE_PURGE_ALL`

Tool to purge all data cache entries for a specific project. Use when you need to clear the entire data cache for a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teamId` | string | No | Optional team identifier to perform the request on behalf of. |
| `projectIdOrName` | string | Yes | The project ID or name for which to purge all data cache entries. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Deployment (V2)

**Slug:** `VERCEL_DELETE_DEPLOYMENT`

Permanently delete a Vercel deployment by its ID or URL. Use this action to remove a deployment from Vercel. The deployment can be identified either by its unique deployment ID (e.g., 'dpl_xxx') or by providing the deployment URL as a query parameter. Note: This action is destructive and cannot be undone. The deployment will be permanently removed. Do not target the latest production deployment. When filtering deployments by branch or status before deletion, use `meta.githubCommitRef` for branch and `readyState` for status — misreading these fields can cause unintended deletions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique deployment ID (starts with 'dpl_'). Required but ignored if 'url' query parameter is provided. |
| `url` | string | No | A deployment URL or alias URL to identify the deployment to delete. When provided, this takes precedence over the 'id' parameter. |
| `slug` | string | No | The Team slug (URL-friendly name) to perform the request on behalf of. Can be used instead of team_id. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. Required when the deployment belongs to a team. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete DNS Record

**Slug:** `VERCEL_DELETE_DNS_RECORD`

Tool to delete a DNS record from a domain. Use when you need to remove an existing DNS record by its record ID and domain name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `domain` | string | Yes | The domain name that contains the DNS record to delete (e.g., 'example.com') |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `recordId` | string | Yes | The unique identifier of the DNS record to delete. You can obtain this ID by listing DNS records for the domain using the VERCEL_GET_DNS_RECORDS action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Domain

**Slug:** `VERCEL_DELETE_DOMAIN`

Tool to remove a domain by name from Vercel. Use when you need to delete a domain that is no longer needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `domain` | string | Yes | The name of the domain to delete. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Edge Config

**Slug:** `VERCEL_DELETE_EDGE_CONFIG`

Tool to delete an Edge Config by its unique identifier. Use when you need to permanently remove an Edge Config and all its associated data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Edge Config Tokens (v2)

**Slug:** `VERCEL_DELETE_EDGE_CONFIG_TOKENS`

Tool to delete one or more Edge Config tokens. Use when you need to revoke access tokens from an Edge Config. Note: The tokens array must contain the actual token values, not token IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `tokens` | array | Yes | List of token values (not token IDs) to delete. Each token is the actual token string that was generated when the token was created. |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config from which to delete tokens. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Vercel Project (v2)

**Slug:** `VERCEL_DELETE_PROJECT`

Tool to delete a Vercel project by ID or name. Use after confirming the correct project identifier to permanently remove the project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier or the project name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Project Environment Variable

**Slug:** `VERCEL_DELETE_PROJECT_ENV`

Tool to remove an environment variable from a Vercel project. Use when you need to delete a specific environment variable by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique environment variable identifier |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `customEnvironmentId` | string | No | The unique custom environment identifier within the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Rolling Release Configuration

**Slug:** `VERCEL_DELETE_ROLLING_RELEASE_CONFIG`

Tool to delete rolling release configuration for a project. Use when you need to remove or disable rolling release configuration from a Vercel project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | Project ID or project name (URL-encoded). This identifies the project whose rolling release configuration should be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Shared Env Variable

**Slug:** `VERCEL_DELETE_SHARED_ENV_VARIABLE`

Tool to delete one or more shared environment variables. Use when you need to remove shared env vars by their IDs (up to 50 at a time).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | IDs of the Shared Environment Variables to delete. Minimum 1, maximum 50. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Vercel Webhook

**Slug:** `VERCEL_DELETE_WEBHOOK`

Delete a webhook by its unique ID to stop receiving event notifications. This action permanently removes the webhook configuration. Use VERCEL_GET_WEBHOOKS to find webhook IDs if needed. The deletion is idempotent - deleting an already deleted webhook returns a 404 error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the webhook to delete. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download Cache Artifact

**Slug:** `VERCEL_DOWNLOAD_ARTIFACT`

Download a cache artifact from Vercel's Remote Cache by its hash. Use this to retrieve previously cached build artifacts generated by Turborepo or other build systems. Remote Caching must be enabled for the team. Returns a tar.gz compressed file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hash` | string | Yes | The unique artifact hash identifier generated by the build system (e.g., Turborepo). This hash uniquely identifies the cached build artifact to download. |
| `slug` | string | No | The Team URL slug to perform the request on behalf of. Can be used as an alternative to teamId. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. Required to access team-level cached artifacts. |
| `xArtifactClientCi` | string | No | The CI/CD environment where this artifact is being downloaded (e.g., 'VERCEL', 'GITHUB_ACTIONS', 'CIRCLECI'). Max 50 characters. |
| `xArtifactClientInteractive` | integer | No | Indicates if the client is an interactive shell. Set to 1 for interactive, 0 for non-interactive (CI environments). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit Project Environment Variable

**Slug:** `VERCEL_EDIT_PROJECT_ENV`

Tool to edit an environment variable in a Vercel project. Use when you need to update an existing environment variable's value, type, target environments, or other properties. Requires both the project identifier and the environment variable ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique environment variable identifier |
| `key` | string | No | The name of the environment variable |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `type` | string ("system" | "secret" | "encrypted" | "plain" | "sensitive") | No | The type of environment variable |
| `value` | string | No | The value of the environment variable |
| `target` | array | No | The target environment of the environment variable. Must be provided as a list even for a single environment |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `comment` | string | No | A comment to add context on what this env var is for |
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `gitBranch` | string | No | If defined, the git branch of the environment variable (must have target=preview) |
| `customEnvironmentIds` | array | No | The custom environments that the environment variable should be synced to. Must be provided as a list even for a single ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Filter Project Environment Variables

**Slug:** `VERCEL_FILTER_PROJECT_ENVS`

Tool to retrieve environment variables of a Vercel project by id or name. Use when you need to list and filter environment variables for a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `source` | string | No | The source that is calling the endpoint |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `decrypt` | string | No | If true, the environment variable value will be decrypted |
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `gitBranch` | string | No | If defined, the git branch of the environment variable to filter the results (must have target=preview) |
| `customEnvironmentId` | string | No | The unique custom environment identifier within the project |
| `customEnvironmentSlug` | string | No | The custom environment slug (name) within the project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Active Attack Status

**Slug:** `VERCEL_GET_ACTIVE_ATTACK_STATUS`

Tool to read active attack data from Vercel Firewall for a specific project. Use when you need to check if a project is under attack or retrieve security anomaly information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `since` | integer | No | Timestamp in milliseconds to retrieve attack data since this time. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | Yes | The unique identifier of the project to check attack status for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Vercel Alias

**Slug:** `VERCEL_GET_ALIAS`

Tool to retrieve information about a Vercel alias by ID or alias name. Use when you need to get details of a specific alias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | integer | No | Get the alias only if it was created after the provided timestamp (milliseconds). |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `since` | integer | No | Get the alias only if it was created after this JavaScript timestamp (milliseconds). |
| `until` | integer | No | Get the alias only if it was created before this JavaScript timestamp (milliseconds). |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrAlias` | string | Yes | The alias or alias ID to be retrieved. |
| `projectId` | string | No | Get the alias only if it is assigned to the provided project ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Log Drains

**Slug:** `VERCEL_GET_ALL_LOG_DRAINS`

Tool to retrieve a list of all log drains (deprecated). Use when you need to list all log drains configured for your account, team, or project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `projectId` | string | No | Filter log drains by project ID |
| `includeMetadata` | boolean | No | Include metadata in the response |
| `projectIdOrName` | string | No | Filter log drains by project ID or name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Artifact Information

**Slug:** `VERCEL_GET_ARTIFACT_INFO`

Tool to query information about artifacts by their hashes. Use when you need to retrieve metadata about one or more artifacts, including size, processing duration, and tags.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `hashes` | array | Yes | List of artifact hashes to query information for |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Auth Token Metadata

**Slug:** `VERCEL_GET_AUTH_TOKEN`

Tool to retrieve metadata for an authentication token. Use when you need to inspect details of a specific token or get information about the current token being used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tokenId` | string | Yes | The identifier of the token to retrieve. The special value 'current' may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Authenticated User

**Slug:** `VERCEL_GET_AUTH_USER`

Tool to get the authenticated user's profile. Use when you need to retrieve details about the currently authenticated user.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bulk Domain Availability

**Slug:** `VERCEL_GET_BULK_AVAILABILITY`

Tool to check availability for multiple domains at once. Use when you need to verify availability of multiple domain names efficiently in a single request. Supports checking up to 50 domains per request. Only domains with Vercel-supported TLDs can be checked.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teamId` | string | No | Optional team identifier to perform the request on behalf of. |
| `domains` | array | Yes | An array of domain names to check for availability. Must contain at least 1 and at most 50 domain names. Each domain should be a valid domain name (e.g., 'example.com', 'myapp.io'). IMPORTANT: Only domains with Vercel-supported TLDs can be checked. Common supported TLDs include: .com, .net, .org, .io, .co, .dev, .app, .ai, .xyz, .me, .info, .biz, .tech, .online, .site, .store, .shop, .cloud, .digital, .agency, .design, .studio, .solutions, .systems, .tools, .world, .today, .life, .plus, .one, .pro, .zone, .team, .works, .page, .email, .link, .global, .live, .network, .services, .software, .technology. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Remote Caching Status

**Slug:** `VERCEL_GET_CACHE_STATUS`

Tool to get the status of Remote Caching for the principal. Use when you need to check if Remote Caching is enabled, disabled, over limit, or paused.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get SSL/TLS Certificates

**Slug:** `VERCEL_GET_CERTS`

Tool to retrieve SSL/TLS certificates for the authenticated user or team. Use after authentication to list active certificates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `limit` | integer | No | Maximum number of certificates to return (max 100) |
| `since` | integer | No | Timestamp in milliseconds; include certificates created since this time |
| `until` | integer | No | Timestamp in milliseconds; include certificates created until this time |
| `teamId` | string | No | Team identifier to perform the request on behalf of. Omit for personal account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Integration Configurations

**Slug:** `VERCEL_GET_CONFIGURATIONS`

Tool to get configurations for the authenticated user or team. Use when you need to list integration configurations installed on an account or team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. Only one of teamId or slug may be set. |
| `view` | string ("account" | "project") | Yes | View type for configurations. Use 'account' to list all configurations for the account/team, or 'project' to list configurations for specific projects. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. Omit for personal account. |
| `installationType` | string ("marketplace" | "external" | "provisioning") | No | Filter by installation type. 'marketplace' for integrations from Vercel marketplace, 'external' for custom integrations, 'provisioning' for provisioned integrations. |
| `integrationIdOrSlug` | string | No | ID or slug of the integration to filter configurations by. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contact Info Schema

**Slug:** `VERCEL_GET_CONTACT_INFO_SCHEMA`

Tool to retrieve the contact information schema for a domain's top-level domain (TLD). Use when you need to understand what contact information fields are required for a specific domain registration or transfer. Some TLDs require additional contact information beyond standard fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Optional Team slug to perform the request on behalf of |
| `domain` | string | Yes | A valid domain name to retrieve the TLD-specific contact information schema for (e.g., 'example.com') |
| `teamId` | string | No | Optional Team ID to perform the request on behalf of |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deployment by ID or URL

**Slug:** `VERCEL_GET_DEPLOYMENT`

Tool to get a deployment by ID or URL. Use when you need to retrieve detailed information about a specific deployment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrUrl` | string | Yes | The unique identifier or hostname of the deployment. |
| `withGitRepoInfo` | string | No | Whether to add in gitRepo information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get deployment details

**Slug:** `VERCEL_GET_DEPLOYMENT_DETAILS`

DEPRECATED: Use VERCEL_VERCEL_GET_DEPLOYMENT instead. Retrieves detailed information about a specific deployment. Use after triggering a deployment to inspect status and configuration. Poll with exponential backoff (5–30s) since deployments may remain in QUEUED or BUILDING state for minutes; tight polling triggers HTTP 429. Deployment is live only when readyState=READY and errorCode is absent; other states (QUEUED, BUILDING, CANCELED, ERROR) mean no traffic is served. Build failures surface in readyState=ERROR with errorCode and errorMessage fields — successful creation does not guarantee a successful build. Example: { "idOrUrl": "dpl_Br7FSrRXuUkSHj7t7GVVadyuGvFg" }

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrUrl` | string | Yes | The unique identifier or hostname of the deployment |
| `withGitRepoInfo` | boolean | No | Whether to include Git repository information |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deployment Events (Deprecated)

**Slug:** `VERCEL_GET_DEPLOYMENT_EVENTS`

DEPRECATED: Use VERCEL_VERCEL_GET_DEPLOYMENT_EVENTS2 instead. Tool to retrieve events related to a specific deployment. Use when monitoring or debugging deployment history or streaming real-time events. Example: "Get events for deployment dpl_xxx since 1540095775941."

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Deployment build ID |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `limit` | integer | No | Maximum number of events to return; use -1 for all available logs |
| `since` | integer | No | Timestamp (ms) for when events should be pulled from Must be UTC milliseconds; seconds or other units yield empty/partial results. |
| `until` | integer | No | Timestamp (ms) for when events should be pulled up until Must be UTC milliseconds; seconds or other units yield empty/partial results. |
| `builds` | integer | No | Include build events; set to 1 to enable |
| `follow` | integer | No | When enabled (1), this endpoint will stream live events as they happen |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrUrl` | string | Yes | Unique identifier (e.g., dpl_xxx) or hostname (e.g., my-deployment.vercel.app) of an existing deployment. Use VERCEL_LIST_ALL_DEPLOYMENTS to find valid deployment IDs. |
| `delimiter` | integer | No | Include delimiter events; set to 1 to enable |
| `direction` | string ("forward" | "backward") | No | Order of the returned events based on the timestamp |
| `statusCode` | string | No | HTTP status code range to filter events by (e.g., '5xx') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deployment Events

**Slug:** `VERCEL_GET_DEPLOYMENT_EVENTS2`

Tool to get deployment events for a specific Vercel deployment by ID or URL. Use when you need to retrieve build logs, event streams, or monitor deployment progress.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Deployment build ID |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `limit` | integer | No | Maximum number of events to return. Provide -1 to return all available logs |
| `since` | integer | No | Timestamp for when build logs should be pulled from |
| `until` | integer | No | Timestamp for when the build logs should be pulled up until |
| `builds` | integer ("0" | "1") | No | Include build events. Set to 1 to enable |
| `follow` | integer ("0" | "1") | No | When enabled (1), this endpoint will return live events as they happen |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `idOrUrl` | string | Yes | The unique identifier or hostname of the deployment |
| `delimiter` | integer ("0" | "1") | No | Include delimiter events. Set to 1 to enable |
| `direction` | string ("backward" | "forward") | No | Order of the returned events based on the timestamp. Default is 'forward' |
| `statusCode` | string | No | HTTP status code range to filter events by |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deployment File Contents

**Slug:** `VERCEL_GET_DEPLOYMENT_FILE_CONTENTS`

Retrieve the contents of a specific file from a Vercel deployment. Returns the file content as a base64-encoded string. First use 'List Deployment Files' to get the file_id (uid), then use this action to get the actual file contents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique deployment identifier (starts with 'dpl_'). Obtain this from the List All Deployments action. |
| `path` | string | No | Path to the file to fetch (only for Git deployments) |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `fileId` | string | Yes | The unique file identifier (SHA hash). Obtain this from the 'uid' field returned by the List Deployment Files action. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deployment Logs (Deprecated)

**Slug:** `VERCEL_GET_DEPLOYMENT_LOGS`

DEPRECATED: Use VERCEL_VERCEL_GET_DEPLOYMENT_EVENTS2 instead. Tool to retrieve logs for a specific Vercel deployment. Use when monitoring deployment execution, debugging issues, or analyzing deployment performance. Example: "Get logs for deployment dpl_xxx since 1540095775941."

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `limit` | integer | No | Maximum number of log entries to return; use -1 for all available logs |
| `since` | integer | No | Timestamp (ms) for when logs should be pulled from Must be UTC. Wrong timezone or mismatched since/until window yields empty or partial results. |
| `until` | integer | No | Timestamp (ms) for when logs should be pulled up until |
| `builds` | integer | No | Include build logs; set to 1 to enable |
| `follow` | integer | No | When enabled (1), this endpoint will stream live logs as they happen |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrUrl` | string | Yes | Full deployment ID starting with 'dpl_' prefix (e.g., 'dpl_5WJWYSyB7BpgTj3EuwF37WMRBXBtPQ2iTMJHJBJyRfd') or deployment hostname (e.g., 'my-app-abc123.vercel.app'). Short IDs without the 'dpl_' prefix are NOT supported. If a full URL is provided, the hostname will be extracted. Can also be passed as 'deploymentId'. |
| `direction` | string ("forward" | "backward") | No | Order of the returned logs based on the timestamp |
| `statusCode` | string | No | HTTP status code range to filter logs by (e.g., '5xx') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deployment Runtime Logs

**Slug:** `VERCEL_GET_DEPLOYMENT_LOGS2`

Tool to retrieve runtime logs for a specific Vercel deployment by project and deployment ID. Use when you need to debug or monitor deployment execution with detailed runtime information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `maxLogs` | integer | No | Maximum number of log entries to return (default: 100). The endpoint streams logs, so this limits how many to collect. |
| `projectId` | string | Yes | The unique identifier of the project |
| `deploymentId` | string | Yes | The unique identifier of the deployment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Deployments

**Slug:** `VERCEL_GET_DEPLOYMENTS`

Tool to list deployments from Vercel. Use when you need to retrieve deployment information for a project or team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | integer | No | Gets the deployment created before this Date timestamp. (default: current time) |
| `app` | string | No | Name of the deployment to filter by |
| `sha` | string | No | Filter deployments based on the SHA |
| `from` | integer | No | Gets the deployment created after this Date timestamp. (default: current time) |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `limit` | integer | No | Maximum number of deployments to list from a request |
| `since` | integer | No | Get Deployments created after this JavaScript timestamp |
| `state` | string | No | Filter deployments based on their state (BUILDING, ERROR, INITIALIZING, QUEUED, READY, CANCELED) |
| `until` | integer | No | Get Deployments created before this JavaScript timestamp |
| `users` | string | No | Filter out deployments based on users who have created the deployment |
| `branch` | string | No | Filter deployments based on the branch name |
| `target` | string | No | Filter deployments based on the environment |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `projectId` | string | No | Filter deployments from the given ID or name |
| `projectIds` | array | No | Filter deployments from the given project IDs. Cannot be used when projectId is specified |
| `rollbackCandidate` | boolean | No | Filter deployments based on their rollback candidacy |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Domain Information

**Slug:** `VERCEL_GET_DOMAIN`

Tool to retrieve complete information for a single domain. Use when you need to check domain details, ownership verification status, nameserver configuration, or domain service type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `domain` | string | Yes | The name of the domain (e.g., 'example.com'). |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Domain Configuration

**Slug:** `VERCEL_GET_DOMAIN_CONFIG`

Tool to get a domain's configuration details from Vercel. Use when you need to check how a domain is configured, what DNS records are recommended, or verify domain setup. Returns configuration status, accepted SSL challenges, and recommended DNS records (CNAME and IPv4).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `domain` | string | Yes | The name of the domain to get configuration for |
| `strict` | string ("true" | "false") | No | When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectIdOrName` | string | No | The project id or name that will be associated with the domain. Use this when the domain is not yet associated with a project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Domain Transfer Info

**Slug:** `VERCEL_GET_DOMAIN_TRANSFER_INFO`

Tool to get information required to transfer a domain to Vercel. Use when you need to check transfer availability or current status before initiating a transfer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Optional Vercel Team slug to perform the request on behalf of. |
| `domain` | string | Yes | The domain name to check transfer info for (e.g., 'example.com') |
| `teamId` | string | No | Optional Vercel Team ID to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Drains

**Slug:** `VERCEL_GET_DRAINS`

Tool to retrieve a list of all drains. Use this to get all configured drains for an account or team, including their delivery configurations and sources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `projectId` | string | No | Filter drains by project ID |
| `includeMetadata` | boolean | No | Whether to include additional metadata in the response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config

**Slug:** `VERCEL_GET_EDGE_CONFIG`

Tool to retrieve detailed information about a specific Edge Config by ID. Use when you need to inspect edge config metadata including transfer status, sync information, and purpose details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config Backup

**Slug:** `VERCEL_GET_EDGE_CONFIG_BACKUP`

Tool to retrieve a specific backup version of an Edge Config. Use when you need to inspect or restore a previous version of edge config data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Optional Team slug to perform the request on behalf of |
| `teamId` | string | No | Optional Team ID to perform the request on behalf of |
| `backupId` | string | Yes | The backup ID or version to retrieve |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config Item

**Slug:** `VERCEL_GET_EDGE_CONFIG_ITEM`

Tool to retrieve a specific item within an Edge Config. Use after obtaining the Edge Config ID and when you need to inspect or validate a particular configuration item by its key.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config (must start with ecfg_ prefix) |
| `edgeConfigItemKey` | string | Yes | Key of the Edge Config item to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config Schema

**Slug:** `VERCEL_GET_EDGE_CONFIG_SCHEMA`

Tool to retrieve the JSON schema of a specific Edge Config. Use when you need to inspect the schema definition of an edge config.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Optional Team slug to perform the request on behalf of |
| `teamId` | string | No | Optional Team ID to perform the request on behalf of |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config to retrieve the schema for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config Token

**Slug:** `VERCEL_GET_EDGE_CONFIG_TOKEN`

Tool to retrieve details of a specific token associated with an Edge Config. Use when you need metadata for an existing Edge Config token.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of. |
| `token` | string | Yes | The token string (read access token) whose metadata is to be retrieved. This is the token value returned when creating a token, not the token ID. |
| `teamId` | string | No | Team identifier to perform the request on behalf of. |
| `edgeConfigId` | string | Yes | The unique identifier of the Edge Config. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Firewall Configuration

**Slug:** `VERCEL_GET_FIREWALL_CONFIG`

Tool to retrieve firewall configuration for a Vercel project. Use when you need to inspect current firewall rules and settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `projectId` | string | Yes | The unique identifier of the project |
| `configVersion` | string | Yes | The deployed configVersion for the firewall configuration. Use 'active' for the currently deployed configuration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Git Namespaces

**Slug:** `VERCEL_GET_GIT_NAMESPACES`

Tool to list Git namespaces (organizations/users) by provider. Use this to discover available Git namespaces for integration with projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `host` | string | No | The custom Git host URL. Required when provider is 'github-custom-host' for GitHub Enterprise Server. Not needed for other providers. |
| `provider` | string ("github" | "github-limited" | "github-custom-host" | "gitlab" | "bitbucket") | Yes | The Git provider type to list namespaces for. Required. Use 'github' for standard GitHub, 'github-limited' for limited GitHub access, 'github-custom-host' for GitHub Enterprise Server, 'gitlab' for GitLab, or 'bitbucket' for Bitbucket. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Vercel Project (Deprecated)

**Slug:** `VERCEL_GET_PROJECT`

DEPRECATED: Use VERCEL_VERCEL_GET_PROJECT2 instead. Tool to retrieve information about a Vercel project by ID or name. Use when you need project metadata after obtaining its identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teamId` | string | No | Team identifier to perform the request on behalf of. Required for team projects, omit for personal account projects. |
| `projectIdOrName` | string | Yes | The unique project identifier (e.g., 'prj_xxxx') or project name (e.g., 'my-app'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find Project by ID or Name

**Slug:** `VERCEL_GET_PROJECT2`

Tool to find a project by ID or name with comprehensive details. Use when you need complete project metadata including configuration, deployments, security settings, and analytics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier or the project name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Domain

**Slug:** `VERCEL_GET_PROJECT_DOMAIN`

Tool to retrieve details about a specific domain attached to a Vercel project. Use when you need to check domain configuration, verification status, redirect settings, or git branch associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `domain` | string | Yes | The project domain name to retrieve (e.g., 'www.example.com') |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrName` | string | Yes | The unique project identifier or project name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Project Domains

**Slug:** `VERCEL_GET_PROJECT_DOMAINS`

Tool to retrieve all domains attached to a Vercel project. Use when you need to verify domain configuration, check verification status, audit redirect/branch bindings, or before performing domain operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team URL slug to perform the request on behalf of. |
| `limit` | integer | No | Maximum number of domains to return per request. Maximum value is 100. |
| `order` | string ("ASC" | "DESC") | No | Sort order by creation date. 'ASC' for ascending, 'DESC' for descending. Default is 'DESC'. |
| `since` | integer | No | Returns domains created after this JavaScript timestamp in milliseconds. |
| `until` | integer | No | Returns domains created before this JavaScript timestamp in milliseconds. |
| `target` | string ("production" | "preview") | No | Filters by domain target. Use 'production' for production domains or 'preview' for preview domains. |
| `teamId` | string | No | Team identifier to perform the request on behalf of. Omit for personal account. |
| `idOrName` | string | Yes | The project's unique identifier or project name. |
| `redirect` | string | No | Filters domains by their redirect target domain name. |
| `verified` | boolean | No | Filters by verification status. Set to true for verified domains only, false for unverified. |
| `gitBranch` | string | No | Filters domains based on a specific git branch. |
| `redirects` | boolean | No | Controls redirect domain inclusion. Set to true to include redirect domains, false to exclude. Default is true. |
| `production` | boolean | No | Filters domains by production status. Set to true for production domains, false for non-production. |
| `customEnvironmentId` | string | No | The unique custom environment identifier within the project to filter domains. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Environment Variable

**Slug:** `VERCEL_GET_PROJECT_ENV`

Tool to retrieve the decrypted value of an environment variable from a Vercel project. Use when you need to access the actual value of a specific environment variable by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID for the environment variable to get the decrypted value. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier or the project name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Projects

**Slug:** `VERCEL_GET_PROJECTS`

Tool to retrieve a list of projects from Vercel. Use this to get project information with optional filtering by repository, team, or other criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | No | Query only projects updated after the given timestamp or continuation token. |
| `repo` | string | No | Filter results by repo. Also used for project count. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `limit` | string | No | Limit the number of projects returned. |
| `repoId` | string | No | Filter results by Repository ID. |
| `search` | string | No | Search projects by the name field. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `repoUrl` | string | No | Filter results by Repository URL. |
| `deprecated` | boolean | No | Filter results by deprecated projects. |
| `edgeConfigId` | string | No | Filter results by connected Edge Config ID. |
| `excludeRepos` | string | No | Filter results by excluding those projects that belong to a repo. |
| `staticIpsEnabled` | string ("0" | "1") | No | Filter results by projects with Static IPs enabled. Use '1' for enabled, '0' for disabled. |
| `buildMachineTypes` | string | No | Filter results by build machine types. Accepts comma-separated values. Use 'default' for projects without a build machine type set. |
| `edgeConfigTokenId` | string | No | Filter results by connected Edge Config Token ID. |
| `gitForkProtection` | string ("0" | "1") | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed. Use '1' for enabled, '0' for disabled. |
| `elasticConcurrencyEnabled` | string ("0" | "1") | No | Filter results by projects with elastic concurrency enabled. Use '1' for enabled, '0' for disabled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Promote Aliases

**Slug:** `VERCEL_GET_PROMOTE_ALIASES`

Tool to get a list of aliases with status for the current promote operation. Use when you need to check the status of aliases during a promotion process for a specific project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `limit` | integer | No | Maximum number of aliases to list from a request (max 100). |
| `since` | integer | No | Get aliases created after this epoch timestamp in milliseconds. |
| `until` | integer | No | Get aliases created before this epoch timestamp in milliseconds. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | Yes | The unique identifier of the project. |
| `failedOnly` | boolean | No | Filter results down to aliases that failed to map to the requested deployment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Rolling Release

**Slug:** `VERCEL_GET_ROLLING_RELEASE`

Tool to retrieve active rolling release information for a Vercel project. Use when you need to check the status of a gradual deployment rollout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `state` | string ("ACTIVE" | "COMPLETE" | "ABORTED") | No | Filter by rolling release state. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | Project ID or project name (URL-encoded). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Rolling Release Billing Status

**Slug:** `VERCEL_GET_ROLLING_RELEASE_BILLING_STATUS`

Tool to retrieve the rolling release billing status for a Vercel project. Use when you need to check if rolling releases are available for a project based on the team's plan.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | Project ID or project name (URL-encoded). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Rolling Release Config

**Slug:** `VERCEL_GET_ROLLING_RELEASE_CONFIG`

Tool to get rolling release configuration for a Vercel project. Use when you need to retrieve the project-level rolling release settings that define how deployments are gradually rolled out.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | Project ID or project name (URL-encoded) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Runtime Logs (Deprecated)

**Slug:** `VERCEL_GET_RUNTIME_LOGS`

DEPRECATED: Use VERCEL_GET_DEPLOYMENT_LOGS2 instead. Tool to retrieve runtime logs for a specific Vercel deployment. Use when monitoring deployment execution, debugging runtime issues, or analyzing deployment performance. Runtime logs show application behavior during execution, including errors and request information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `projectId` | string | Yes | The unique identifier of the project |
| `deploymentId` | string | Yes | The unique identifier of the deployment |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Shared Environment Variable

**Slug:** `VERCEL_GET_SHARED_ENV_VAR`

Tool to retrieve the decrypted value of a Shared Environment Variable by id. Use when you need to inspect a specific shared environment variable value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID for the Shared Environment Variable to get the decrypted value. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Shared Environment Variables

**Slug:** `VERCEL_GET_SHARED_ENV_VARIABLES`

Tool to list all shared environment variables for a team. Use when you need to retrieve or inspect shared environment variables across projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Filter shared environment variables based on comma-separated IDs. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `search` | string | No | Search term to filter environment variables by key name. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | No | Filter shared environment variables that belong to a specific project. |
| `exclude_ids` | string | No | Exclude shared environment variables based on comma-separated IDs. |
| `exclude_projectId` | string | No | Exclude shared environment variables that belong to a specific project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team Details

**Slug:** `VERCEL_GET_TEAM`

Retrieves detailed information about a specific Vercel team by its ID or slug. Returns comprehensive team metadata including billing, membership, resource configuration, and settings. Use this to get team details before performing team-specific operations. The teamId parameter accepts either a team ID (e.g., 'team_xxx') or team slug (e.g., 'my-team').

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Optional team slug to scope the request. Used for authorization when accessing team-specific resources. |
| `teamId` | string | Yes | The Team identifier or slug to retrieve information for. Can be either a team ID (e.g., 'team_RcupkAQdr25D0qQu2MmPu6Th') or a team slug (e.g., 'my-team'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Teams

**Slug:** `VERCEL_GET_TEAMS`

Tool to list all teams accessible to the authenticated user with detailed information. Use when you need comprehensive team data including membership, configuration, and settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of Teams which may be returned. |
| `since` | integer | No | Timestamp (in milliseconds) to only include Teams created since then. |
| `until` | integer | No | Timestamp (in milliseconds) to only include Teams created until then. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get TLD Info

**Slug:** `VERCEL_GET_TLD_INFO`

Tool to get information about a specific top-level domain (TLD). Use when you need to check supported language codes for domain registration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tld` | string | Yes | The top-level domain (TLD) to get information for. Examples include: 'com', 'net', 'org', 'io', 'dev', 'app', etc. Do not include the leading dot (use 'com' not '.com'). |
| `teamId` | string | No | Optional Vercel Team ID to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get TLD Price

**Slug:** `VERCEL_GET_TLD_PRICE`

Tool to get pricing information for a specific top-level domain (TLD). Use when you need to check domain registration, renewal, or transfer costs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tld` | string | Yes | The top-level domain (TLD) to get pricing for. Examples include: 'com', 'net', 'org', 'io', 'dev', 'app', etc. Do not include the leading dot (use 'com' not '.com'). |
| `years` | integer | No | The number of years to get the price for. If not provided, the minimum number of years for the TLD will be used. |
| `teamId` | string | No | Optional Vercel Team ID to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Events

**Slug:** `VERCEL_GET_USER_EVENTS`

Tool to list user events. Use when you need to retrieve events generated by a user or team, such as logins, deployments, and team activities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `limit` | integer | No | Maximum number of items which may be returned. |
| `since` | string | No | Timestamp to only include items created since then. |
| `types` | string | No | Comma-delimited list of event "types" to filter the results by. |
| `until` | string | No | Timestamp to only include items created until then. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `userId` | string | No | Deprecated. Use `principalId` instead. If `principalId` and `userId` both exist, `principalId` will be used. |
| `projectIds` | string | No | Comma-delimited list of project IDs to filter the results by. |
| `principalId` | string | No | When retrieving events for a Team, the `principalId` parameter may be specified to filter events generated by a specific principal. |
| `withPayload` | string | No | When set to `true`, the response will include the `payload` field for each event. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook

**Slug:** `VERCEL_GET_WEBHOOK`

Tool to retrieve details of a specific webhook by ID. Use when you need to inspect webhook configuration, events, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the webhook to retrieve (e.g., 'account_hook_v3dYzpfkptKPBE483PIHvN0y') |
| `slug` | string | No | The Team slug to perform the request on behalf of. Alternative to team_id. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. Required when accessing team webhooks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Invalidate Cache By Source Images

**Slug:** `VERCEL_INVALIDATE_CACHE_BY_SRC_IMAGES`

Tool to invalidate edge cache by source image URLs. Use when you need to mark cached images as stale for specific source images. Invalidated images are revalidated in the background on the next request, ensuring zero latency impact for users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `srcImages` | array | Yes | List of source image URLs to invalidate from edge cache. Must contain 1-8 URLs, each up to 8192 characters. Invalidated images will be revalidated in the background on next request. |
| `projectIdOrName` | string | Yes | The project ID or name to invalidate cache for. This is required and must be a valid project identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Invalidate Cache By Tags

**Slug:** `VERCEL_INVALIDATE_CACHE_BY_TAGS`

Tool to invalidate edge cache by tags. Use when you need to mark cached content as stale for specific cache tags. Invalidated content is revalidated in the background on the next request, ensuring zero latency impact for users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `tags` | string | Yes | Cache tags to invalidate. Can be a single tag string or a list of tag strings (1-16 elements, max 256 chars per tag). Invalidated content will be revalidated in the background on next request. |
| `target` | string ("production" | "preview") | No | Target environment to invalidate cache from. Either 'production' or 'preview'. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectIdOrName` | string | Yes | The project ID or name to invalidate cache for. This is required and must be a valid project identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Vercel Aliases

**Slug:** `VERCEL_LIST_ALIASES`

Tool to list aliases from Vercel API. Use when you need to retrieve aliases with optional filtering by domain, project, or time range. Results are paginated; use `limit` with `since`/`until` to iterate pages. Without filters, results span all projects and the personal account scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | integer | No | Get only aliases created after the provided timestamp (milliseconds). |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `limit` | integer | No | Maximum number of aliases to list from a request. |
| `since` | integer | No | Get aliases created after this JavaScript timestamp (milliseconds). |
| `until` | integer | No | Get aliases created before this JavaScript timestamp (milliseconds). |
| `domain` | string | No | Get only aliases of the given domain name. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | No | Filter aliases from the given projectId. |
| `rollbackDeploymentId` | string | No | Get aliases that would be rolled back for the given deployment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Deployments (Deprecated)

**Slug:** `VERCEL_LIST_ALL_DEPLOYMENTS`

DEPRECATED: Use VERCEL_GET_DEPLOYMENTS instead. Lists deployments under your user or team context. Results are cursor-paginated; follow `pagination.next` until null to retrieve all pages. In team contexts, omitting `teamId` or `slug` will cause deployments to appear missing. Example: "List deployments for project QmX...".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `app` | string | No | Name of the deployment to filter by |
| `sha` | string | No | Filter deployments based on the commit SHA |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `limit` | integer | No | Maximum number of deployments to return |
| `since` | integer | No | Get deployments created after this JavaScript timestamp Value must be in milliseconds UTC. |
| `state` | string | No | Comma-separated list of states to filter by. Allowed: BUILDING, ERROR, INITIALIZING, QUEUED, READY, CANCELED |
| `until` | integer | No | Get deployments created before this JavaScript timestamp |
| `users` | string | No | Comma-separated list of user IDs to filter by creator. Example: 'kr1PsOIzqEL5Xg6M4VZcZosf,K4amb7K9dAt5R2vBJWF32bmY' |
| `branch` | string | No | Filter deployments based on the branch name |
| `target` | string | No | Filter deployments based on the environment (e.g., 'production') |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `projectId` | string | No | Filter deployments from the given project ID or name |
| `rollbackCandidate` | boolean | No | Filter deployments based on rollback candidacy |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Auth Tokens

**Slug:** `VERCEL_LIST_AUTH_TOKENS`

Tool to list authentication tokens. Use when you need to retrieve all tokens for the current user or an optional team.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teamId` | string | No | Team ID to list tokens for. If omitted, lists tokens for the current user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deployment Aliases

**Slug:** `VERCEL_LIST_DEPLOYMENT_ALIASES`

Tool to list all aliases assigned to a specific deployment. Use when you need to retrieve the aliases (custom domains or URLs) that point to a particular deployment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the deployment the aliases should be listed for |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deployment Checks

**Slug:** `VERCEL_LIST_DEPLOYMENT_CHECKS`

Tool to retrieve a list of checks for a specific deployment. Use after a deployment to inspect check statuses and results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug on whose behalf to perform the request. |
| `teamId` | string | No | Team ID on whose behalf to perform the request. |
| `deploymentId` | string | Yes | The ID of the deployment to retrieve checks for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Deployment Files

**Slug:** `VERCEL_LIST_DEPLOYMENT_FILES`

Tool to list all files in a specific deployment. Use when you need to inspect the file tree structure of a deployed application.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique deployment identifier |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List DNS Records

**Slug:** `VERCEL_LIST_DNS_RECORDS`

Tool to list existing DNS records for a domain. Use when you need to retrieve, audit, or verify DNS configuration for a domain managed in Vercel.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `limit` | string | No | Maximum number of records to list from a request. Default is 20, maximum is 100. |
| `since` | string | No | Get records created after this JavaScript timestamp in milliseconds. |
| `until` | string | No | Get records created before this JavaScript timestamp in milliseconds. |
| `domain` | string | Yes | The domain name to retrieve DNS records for |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Domains

**Slug:** `VERCEL_LIST_DOMAINS`

Tool to list all domains from Vercel. Use this to retrieve domain information including verification status, nameservers, and ownership details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `limit` | integer | No | Maximum number of domains to list from a request. |
| `since` | integer | No | Get domains created after this JavaScript timestamp. |
| `until` | integer | No | Get domains created before this JavaScript timestamp. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config Backups

**Slug:** `VERCEL_LIST_EDGE_CONFIG_BACKUPS`

Tool to retrieve backups for a specific Edge Config. Use when you need to list or inspect available backups for recovery purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `next` | string | No | Pagination cursor for the next page of results |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `limit` | integer | No | Maximum number of backups to return (max 50) |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `metadata` | string | No | Metadata filter for backups |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config to retrieve backups for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config Items

**Slug:** `VERCEL_LIST_EDGE_CONFIG_ITEMS`

Tool to retrieve all items from a specific Edge Config. Use when you need to inspect all key-value pairs stored in an Edge Config.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config to retrieve items from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Configs

**Slug:** `VERCEL_LIST_EDGE_CONFIGS`

Tool to retrieve all Edge Configs for an account or team. Use when you need to list all Edge Config definitions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Edge Config Tokens

**Slug:** `VERCEL_LIST_EDGE_CONFIG_TOKENS`

Tool to get all tokens of an Edge Config. Use when you need to retrieve the complete list of tokens associated with a specific Edge Config.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `edgeConfigId` | string | Yes | The unique identifier of the Edge Config. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Environment Variables (Deprecated)

**Slug:** `VERCEL_LIST_ENV_VARIABLES`

DEPRECATED: Use FilterProjectEnvs instead. Tool to list environment variables for a specific project. Use when you need to inspect or page through the environment settings before deployment. Each returned env var has independent target scopes (production/preview/development); never assume a variable applies to all environments. Env var changes require a new deployment to take effect. Example: { "projectId": "prj_nos3l9LxEmu8dYCFBaUVlox26eRJ", "decrypt": false, "limit": 20 }

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of variables to return (1-100). |
| `until` | integer | No | Pagination cursor. Use the `pagination.next` timestamp from a prior response. Repeat requests with each new `pagination.next` value until no cursor is returned to avoid missing variables. |
| `decrypt` | boolean | No | Whether to return decrypted values. Even with decrypt=true, values may still be redacted if the token lacks sufficient permissions; treat empty values as potentially redacted, not absent. |
| `gitBranch` | string | No | Filter variables for a specific git branch. |
| `projectId` | string | Yes | Unique identifier of the project. Must be the internal Vercel project ID (e.g., from VERCEL_LIST_PROJECTS), not the project name — using the name returns empty or misleading results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Firewall Events by Project

**Slug:** `VERCEL_LIST_FIREWALL_EVENTS`

Retrieve firewall events and security actions for a specific Vercel project. Use this tool when you need to: - Monitor security events and blocked requests for a project - Analyze firewall actions (blocks, challenges, rate limits) over a time period - Investigate suspicious activity or attack patterns - Review which firewall rules are being triggered Note: This endpoint requires appropriate permissions. Enterprise or Pro plans may be required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hosts` | string | No | Comma-separated list of hostnames to filter firewall events by. Only events affecting these domains will be returned. Example: 'example.com,www.example.com'. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. Required when accessing team resources. |
| `projectId` | string | Yes | The unique identifier of the Vercel project (e.g., 'prj_abc123'). Required parameter to retrieve firewall events for that specific project. |
| `endTimestamp` | integer | No | End timestamp in milliseconds (Unix epoch) to filter firewall events until. Events returned will be up to this time. If not provided, returns events up to the current time. |
| `startTimestamp` | integer | No | Start timestamp in milliseconds (Unix epoch) to filter firewall events from. Events returned will be from this time onwards. If not provided, returns recent events. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Integration Log Drains

**Slug:** `VERCEL_LIST_INTEGRATION_LOG_DRAINS`

Retrieves a list of Integration log drains for a team or account. Log drains forward logs from deployments to external endpoints. When using an OAuth2 token, results are limited to log drains created by the authenticated integration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Custom Environments

**Slug:** `VERCEL_LIST_PROJECT_CUSTOM_ENVIRONMENTS`

Tool to retrieve custom environments for a Vercel project. Use when you need to list all custom environments or filter by git branch.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `gitBranch` | string | No | Fetch custom environments for a specific git branch |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project Members

**Slug:** `VERCEL_LIST_PROJECT_MEMBERS`

Tool to list all members of a Vercel project. Use when you need to retrieve member information, check access permissions, or audit project membership.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of. |
| `limit` | integer | No | Maximum number of project members to return per request (1-100, default 20). |
| `since` | integer | No | Timestamp in milliseconds to only include members added since then. |
| `until` | integer | No | Timestamp in milliseconds to only include members added until then. |
| `search` | string | No | Search project members by their name, username, and email. |
| `teamId` | string | No | Team identifier to perform the request on behalf of. Omit for personal account. |
| `idOrName` | string | Yes | The project's unique identifier or project name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Projects (Deprecated)

**Slug:** `VERCEL_LIST_PROJECTS`

DEPRECATED: Use GetProjects instead. Tool to list all projects accessible to the authenticated user or team. Use this to retrieve project IDs and metadata for further operations. Results are paginated (max 100 per page); iterate using the `pagination.next` cursor to retrieve all pages — `pagination.count` reflects only the current page, not the total.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of projects to return (max 100) |
| `since` | integer | No | Timestamp in milliseconds; include projects created since this time Must be UTC milliseconds; passing seconds or non-UTC values silently excludes expected projects. |
| `until` | integer | No | Timestamp in milliseconds; include projects created until this time |
| `search` | string | No | Search query to filter projects by name |
| `teamId` | string | No | Team identifier to perform the request on behalf of. Omit for personal account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Supported TLDs

**Slug:** `VERCEL_LIST_SUPPORTED_TLDS`

Tool to retrieve all TLDs (top-level domains) supported by Vercel for domain registration. Use when you need to verify if a specific TLD is supported or to display available domain extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teamId` | string | No | Optional team identifier to perform the request on behalf of. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team Members

**Slug:** `VERCEL_LIST_TEAM_MEMBERS`

Tool to list all members of a Vercel team. Use when you need to retrieve team member information, check team access permissions, or audit team membership.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | string ("OWNER" | "MEMBER" | "DEVELOPER" | "SECURITY" | "BILLING" | "VIEWER" | "VIEWER_FOR_PLUS" | "CONTRIBUTOR") | No | Only return members with the specified team role. |
| `limit` | integer | No | Maximum number of team members to return per request. |
| `since` | integer | No | Timestamp in milliseconds to only include members added since then. |
| `until` | integer | No | Timestamp in milliseconds to only include members added until then. |
| `search` | string | No | Search team members by their name, username, and email. |
| `teamId` | string | Yes | The team's unique identifier. Required to specify which team's members to list. |
| `excludeProject` | string | No | Exclude members who belong to the specified project. |
| `eligibleMembersForProjectId` | string | No | Include team members who are eligible to be members of the specified project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Teams (Deprecated)

**Slug:** `VERCEL_LIST_TEAMS`

DEPRECATED: Use VERCEL_VERCEL_GET_TEAMS instead. Tool to list all teams accessible to the authenticated user. Use after authentication to retrieve team IDs and slugs; resolve the correct teamId or slug here before passing it to other Vercel tools (e.g., VERCEL_GET_PROJECT, deployment queries) — an incorrect or missing teamId causes 404 or scoping errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of teams to return (max 100) |
| `since` | integer | No | Timestamp in milliseconds; include teams created since this time |
| `until` | integer | No | Timestamp in milliseconds; include teams created until this time |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get List of Webhooks

**Slug:** `VERCEL_LIST_WEBHOOKS`

Tool to retrieve a list of all webhooks for the authenticated account or team. Use this to discover configured webhooks and their event subscriptions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | No | Filter webhooks by project identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move Project Domain

**Slug:** `VERCEL_MOVE_PROJECT_DOMAIN`

Tool to move a domain from one Vercel project to another. Use when you need to transfer domain ownership between projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `domain` | string | Yes | The project domain name to move (e.g., 'www.example.com') |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrName` | string | Yes | The unique project identifier or project name of the source project |
| `redirect` | string | No | Target destination domain for redirection. When set, requests to this domain will redirect to the specified target domain. |
| `gitBranch` | string | No | Git branch to associate with this domain in the target project. When set, deployments from this branch will be accessible via this domain. Maximum 250 characters. |
| `projectId` | string | Yes | The unique identifier of the target project to move the domain to |
| `redirectStatusCode` | integer ("301" | "302" | "307" | "308") | No | HTTP status code for redirect. 301: Permanent redirect (cached by browsers), 302: Temporary redirect, 307: Temporary redirect (preserves method), 308: Permanent redirect (preserves method). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pause Vercel Project

**Slug:** `VERCEL_PAUSE_PROJECT`

Tool to pause a Vercel project. Use when you need to temporarily disable a project to prevent new deployments and stop serving traffic.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | Yes | The unique project identifier. Must be the project ID (e.g., 'prj_xxxx'), not the project name. You can get project IDs from the list projects action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Read Firewall Configuration

**Slug:** `VERCEL_READ_FIREWALL_CONFIG`

Tool to read firewall configuration for a Vercel project. Use when you need to inspect current firewall settings, IP rules, or custom security rules for a project.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teamId` | string | No | Team identifier to perform the request on behalf of. Omit for personal account. |
| `projectId` | string | Yes | The ID of the project to retrieve firewall configuration for. This is a required parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Record Artifacts Cache Events

**Slug:** `VERCEL_RECORD_EVENTS`

Tool to record artifacts cache usage events. Use when tracking cache hits and misses for artifact hashes to monitor remote caching performance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `events` | array | Yes | Array of cache usage events to record. Each event tracks a cache hit or miss for an artifact. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `x_artifact_client_ci` | string | No | The continuous integration or delivery environment where this artifact is downloaded. |
| `x_artifact_client_interactive` | integer ("0" | "1") | No | 1 if the client is an interactive shell, otherwise 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Domain from Project

**Slug:** `VERCEL_REMOVE_PROJECT_DOMAIN`

Tool to remove a domain from a Vercel project. Use when you need to detach a domain from a project or clean up domain associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `domain` | string | Yes | The project domain name to remove (e.g., 'www.example.com') |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `removeRedirects` | boolean | No | Whether to remove all domains from this project that redirect to the domain being removed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Vercel Firewall Configuration

**Slug:** `VERCEL_REPLACE_FIREWALL_CONFIG`

Tool to update firewall configuration for a Vercel project. Use when you need to enable/disable firewall, configure CRS rules, or manage custom firewall rules and IP restrictions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `crs` | object | No | Common Request Security (CRS) configuration. |
| `ips` | array | No | IP-based firewall rules |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `rules` | array | No | Custom firewall rules |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `projectId` | string | Yes | The unique project identifier |
| `botIdEnabled` | boolean | No | Whether bot identification is enabled |
| `managedRules` | object | No | Managed rules configuration |
| `firewallEnabled` | boolean | Yes | Whether the firewall is enabled for this project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Request Delete User Account

**Slug:** `VERCEL_REQUEST_DELETE_USER`

Tool to initiate user account deletion on Vercel. Use when a user wants to delete their account. This triggers a verification email to confirm the deletion request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reasons` | array | No | Optional array of objects that describe the reason why the User account is being deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Promote Deployment to Production

**Slug:** `VERCEL_REQUEST_PROMOTE`

Tool to promote a deployment to production by pointing all production domains for a project to the given deployment. Use this when you need to make a specific deployment live without rebuilding. The deployment must be in 'STAGED' state (never served production traffic) and the project must have auto-assignment of custom production domains disabled. For deployments that have already been promoted (seen production traffic), use instant rollback instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | Yes | The unique project identifier. Use VERCEL_LIST_PROJECTS to find available projects. |
| `deploymentId` | string | Yes | The deployment identifier to promote to production. The deployment must be in 'STAGED' state (readySubstate='STAGED'). Use VERCEL_LIST_ALL_DEPLOYMENTS to find eligible deployments. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Git Repositories

**Slug:** `VERCEL_SEARCH_REPO`

Tool to search and list Git repositories linked to a namespace by provider. Use this to discover available repositories for integration with Vercel projects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `host` | string | No | The custom Git host if using a custom Git provider, like GitHub Enterprise Server |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `query` | string | No | Search query to filter repositories by name |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `provider` | string ("github" | "github-limited" | "github-custom-host" | "gitlab" | "bitbucket") | No | Filter by Git provider type (github, github-limited, github-custom-host, gitlab, or bitbucket) |
| `namespaceId` | string | No | The ID of the namespace to search repositories in |
| `installationId` | string | No | The ID of the Git integration installation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Test Drain Configuration

**Slug:** `VERCEL_TEST_DRAIN`

Tool to validate a drain delivery configuration by sending a test request. Use when you need to verify that a drain endpoint is properly configured and can receive events before creating the actual drain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `schemas` | object | Yes | Schema definitions for the drain events. Can be an empty object {} if no specific schemas are required |
| `delivery` | object | Yes | Delivery configuration specifying where and how to send drain events |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Transfer In Domain

**Slug:** `VERCEL_TRANSFER_IN_DOMAIN`

Tool to transfer a domain to Vercel from another registrar. Use when you need to migrate domain registration to Vercel. Before transferring, obtain the authorization code from the current registrar and verify the domain is unlocked and eligible for transfer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `years` | integer | Yes | Number of years to renew the domain for after transfer. Must be valid for the TLD. |
| `domain` | string | Yes | The domain name to transfer in (e.g., 'example.com') |
| `teamId` | string | No | Team ID to perform the transfer on behalf of |
| `authCode` | string | Yes | Authorization code for the domain transfer. Obtain this code from the current (losing) registrar. |
| `autoRenew` | boolean | Yes | Whether the domain should automatically renew before expiration. Can be changed later via the Vercel Dashboard or API. |
| `expectedPrice` | number | Yes | Expected transfer price in USD. Use this to prevent unexpected charges if the price changes between checking and transferring. |
| `contactInformation` | object | Yes | Contact information for domain registration. All fields except address2, company_name, and fax are required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unlink Shared Environment Variable

**Slug:** `VERCEL_UNLINK_SHARED_ENV_VARIABLE`

Tool to disconnect a shared environment variable from a Vercel project. Use when you need to remove the linkage between a shared environment variable and a specific project without deleting the variable itself.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID for the Shared Environment Variable to unlink from the project. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | Yes | The unique identifier of the project to unlink the shared environment variable from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unpause Vercel Project

**Slug:** `VERCEL_UNPAUSE_PROJECT`

Tool to unpause a specific project by its ID. Use after identifying a paused project to enable auto assigning custom production domains and unblock the active Production Deployment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | Yes | The unique project identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Attack Challenge Mode

**Slug:** `VERCEL_UPDATE_ATTACK_CHALLENGE_MODE`

Tool to update Attack Challenge mode for a Vercel project. Use when you need to enable or disable enhanced security protection against potential attacks. Attack Challenge mode adds an extra verification layer to protect deployments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. Alternative to teamId. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. Omit for personal account. |
| `projectId` | string | Yes | The unique identifier of the project to update Attack Challenge mode for |
| `attackModeEnabled` | boolean | Yes | Whether to enable or disable Attack Challenge mode for the project |
| `attackModeActiveUntil` | integer | Yes | Required timestamp in milliseconds specifying when Attack Challenge mode should automatically be disabled. Must be a future date within 24 hours from now. The API will reject timestamps in the past or more than 24 hours into the future. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update DNS Record

**Slug:** `VERCEL_UPDATE_DNS_RECORD`

Tool to update an existing DNS record. Use when you need to modify DNS record properties such as value, name, type, TTL, or comment. Ensure you have the record ID before calling this action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `srv` | object | No | Configuration for SRV record type. |
| `ttl` | integer | No | The Time to live (TTL) value of the DNS record in seconds. Must be between 60 and 2147483647. |
| `name` | string | No | The name of the DNS record. Provide to update the record name. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `type` | string ("A" | "AAAA" | "ALIAS" | "CAA" | "CNAME" | "HTTPS" | "MX" | "SRV" | "TXT" | "NS") | No | The type of the DNS record. Provide to change the record type. |
| `https` | object | No | Configuration for HTTPS record type. |
| `value` | string | No | The value of the DNS record. Provide to update the record value. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `comment` | string | No | A comment to add context on what this DNS record is for. Maximum 500 characters. |
| `recordId` | string | Yes | The unique identifier of the DNS record to update |
| `mxPriority` | integer | No | The MX priority value of the DNS record. Required when record type is MX. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Patch Domain

**Slug:** `VERCEL_UPDATE_DOMAIN`

Tool to update or move an apex domain on Vercel. Use when you need to modify domain configuration (zone settings) or transfer a domain to another team. For 'update' operation, you can modify the zone configuration. For 'move-out' operation, provide a destination team ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `op` | string | Yes | The operation to perform. Use 'update' to modify domain configuration (zone, renew, customNameservers), or 'move-out' to transfer the domain to another team/account. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `zone` | boolean | No | Whether to enable Vercel DNS zone configuration for the domain (uses Vercel's nameservers). Only applicable when op='update'. For 'update' operation, at least one of zone, renew, or customNameservers must be provided. |
| `renew` | boolean | No | Whether to renew the domain. Only applicable when op='update'. Note: This field is deprecated. |
| `domain` | string | Yes | The domain name to update or move (e.g., 'example.com') |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `destination` | string | No | The destination team ID to transfer the domain to. Required when op='move-out'. |
| `customNameservers` | array | No | List of custom nameservers for the domain. Only applicable when op='update'. Note: This field is deprecated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Edge Config

**Slug:** `VERCEL_UPDATE_EDGE_CONFIG`

Tool to update an Edge Config by changing its slug. Use when you need to rename an Edge Config to reflect a new purpose or organizational structure.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | The new slug name for the Edge Config. Must contain only alphanumeric characters, underscores, and hyphens, with a maximum length of 64 characters |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `teamSlug` | string | No | The Team slug to perform the request on behalf of |
| `edgeConfigId` | string | Yes | The unique identifier of the Edge Config to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Edge Config Items

**Slug:** `VERCEL_UPDATE_EDGE_CONFIG_ITEMS`

Tool to update items within a specific Edge Config. Use when you need to batch modify, add, or remove key-value pairs in an existing Edge Config.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of. |
| `items` | array | Yes | List of operations to perform on Edge Config items. |
| `dryRun` | boolean | No | If true, validates the request without applying changes. |
| `teamId` | string | No | Team ID to perform the request on behalf of. |
| `edgeConfigId` | string | Yes | The unique identifier of the Edge Config to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Edge Config Schema

**Slug:** `VERCEL_UPDATE_EDGE_CONFIG_SCHEMA`

Tool to update the JSON Schema for an Edge Config. Use when you need to define or modify validation rules for Edge Config items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `dryRun` | string | No | Optional parameter to perform a dry run without applying changes |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `requestBody` | object | Yes | Body object containing the schema definition to update |
| `edgeConfigId` | string | Yes | Unique identifier of the Edge Config to update the schema for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Firewall Configuration

**Slug:** `VERCEL_UPDATE_FIREWALL_CONFIG`

Tool to incrementally update Vercel Firewall configuration for a project using PATCH. Use when you need to: enable/disable the firewall ('firewallEnabled'), add/remove IP blocking rules ('ip.insert'/'ip.remove'), manage custom rules ('rules.insert'/'rules.update'/'rules.remove'), or configure OWASP CRS rules ('crs.update'/'crs.disable'). Each call modifies a single aspect of the configuration. For full replacement of firewall config, use VERCEL_PUT_FIREWALL_CONFIG instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Identifier for the specific firewall rule or configuration being modified. Required for update/remove actions: 'ip.remove' (ip_xxx), 'rules.update'/'rules.remove' (rule_xxx), 'crs.update'/'crs.disable' (CRS rule name like 'sqli', 'xss', 'lfi', 'rfi', 'rce', 'php', 'gen', 'sd', 'ma', 'sf', 'java'). Not required for 'firewallEnabled' or insert actions. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `value` | string | No | The value for the firewall action. Type depends on action: boolean for 'firewallEnabled' (true/false), object for 'ip.insert' (e.g., {hostname: '*', ip: '192.168.1.1', action: 'deny', notes: 'Block IP'}), object for 'crs.update'/'crs.disable' (e.g., {active: true, action: 'log'}), object for 'rules.insert'/'rules.update' containing name, active, conditionGroup, and action fields. Not required for remove actions when id is provided. |
| `action` | string | Yes | The firewall configuration action to perform. Supported actions: 'firewallEnabled' (enable/disable the firewall with boolean value), 'ip.insert' (add IP blocking rule with value containing hostname, ip, action, notes), 'ip.remove' (remove IP rule by id), 'rules.insert' (add custom firewall rule), 'rules.update' (modify existing rule by id), 'rules.remove' (delete rule by id), 'crs.update' (enable CRS rule by id like 'sqli', 'xss', 'lfi'), 'crs.disable' (disable CRS rule by id), 'managedRules.update' (configure managed rulesets). |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `projectId` | string | Yes | Project identifier to update firewall configuration for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Vercel Project (Deprecated)

**Slug:** `VERCEL_UPDATE_PROJECT`

DEPRECATED: Use VERCEL_VERCEL_UPDATE_PROJECT2 instead. Tool to update an existing project. Partial-update: omitted fields are preserved, but nullable fields explicitly set to null will be cleared. Changes (including rootDirectory, buildCommand) only take effect on subsequent deployments — trigger a new deployment with VERCEL_CREATE_NEW_DEPLOYMENT after updating. Use after confirming the project ID or name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the project (max 100 characters) |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `gitLFS` | boolean | No | Enable Git Large File Storage (LFS) for the project |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrName` | string | Yes | The unique project identifier (e.g., prj_xxxx) or project name to update |
| `framework` | string | No | The framework preset for the project. Common values: nextjs, react, vue, svelte, nuxtjs, gatsby, angular, astro, remix. Set to null for no framework |
| `devCommand` | string | No | The dev command for local development (max 256 chars). Set to null to use framework default |
| `nodeVersion` | string ("24.x" | "22.x" | "20.x" | "18.x" | "16.x") | No | Node.js version for builds and serverless functions |
| `buildCommand` | string | No | The build command for the project (max 256 chars). Set to null to use framework default |
| `publicSource` | boolean | No | Make deployment source code and build logs publicly visible |
| `rootDirectory` | string | No | Directory or relative path to project source code (max 256 chars). Set to null for project root |
| `ssoProtection` | object | No | SSO protection configuration requiring team authentication to access deployments |
| `installCommand` | string | No | The install command for dependencies (max 256 chars). Set to null to use auto-detected package manager |
| `oidcTokenConfig` | object | No | OpenID Connect JSON Web Token generation settings for serverless functions |
| `outputDirectory` | string | No | The directory where build output is located (max 256 chars). Set to null for framework default |
| `directoryListing` | boolean | No | Show directory listing for folders without an index file |
| `gitForkProtection` | boolean | No | Require team member approval before deploying PRs from forked repositories |
| `passwordProtection` | object | No | Password protection configuration for restricting access to deployments |
| `autoExposeSystemEnvs` | boolean | No | Automatically expose Vercel system environment variables (VERCEL, VERCEL_ENV, etc.) to builds |
| `autoAssignCustomDomains` | boolean | No | Automatically assign custom domains to new production deployments |
| `serverlessFunctionRegion` | string | No | Default region for Serverless Functions (e.g., iad1=Washington DC, sfo1=San Francisco, cdg1=Paris) |
| `previewDeploymentsDisabled` | boolean | No | Disable automatic preview deployments for pull requests/branches |
| `commandForIgnoringBuildStep` | string | No | Custom command to determine if build should be skipped (exit 0 to skip, exit 1 to build) |
| `customerSupportCodeVisibility` | boolean | No | Allow Vercel customer support to view git source for debugging |
| `sourceFilesOutsideRootDirectory` | boolean | No | Enable if source files exist outside the configured root directory (for monorepos) |
| `autoAssignCustomDomainsUpdatedBy` | string | No | User ID or email who last updated auto-assign custom domains setting |
| `enableAffectedProjectsDeployments` | boolean | No | Skip deployments when no changes detected in root directory and its dependencies |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Vercel Project (v2)

**Slug:** `VERCEL_UPDATE_PROJECT2`

Tool to update an existing Vercel project configuration. Use when you need to modify project settings such as framework, build commands, environment configuration, or deployment protection settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The desired name for the project |
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `gitLFS` | boolean | No | Specifies whether Git LFS is enabled for this project |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `framework` | string ("blitzjs" | "nextjs" | "gatsby" | "remix" | "react-router" | "astro" | "hexo" | "eleventy" | "docusaurus-2" | "docusaurus" | "preact" | "solidstart-1" | "solidstart" | "dojo" | "ember" | "vue" | "scully" | "ionic-angular" | "angular" | "polymer" | "svelte" | "sveltekit" | "sveltekit-1" | "ionic-react" | "create-react-app" | "gridsome" | "umijs" | "sapper" | "saber" | "stencil" | "nuxtjs" | "redwoodjs" | "hugo" | "jekyll" | "brunch" | "middleman" | "zola" | "hydrogen" | "vite" | "tanstack-start" | "vitepress" | "vuepress" | "parcel" | "fastapi" | "flask" | "fasthtml" | "sanity-v3" | "sanity" | "storybook" | "nitro" | "hono" | "express" | "h3" | "nestjs" | "elysia" | "fastify" | "xmcp") | No | The framework that is being used for this project. When `null` is used no framework is selected |
| `staticIps` | object | No | Static IPs configuration. |
| `devCommand` | string | No | The dev command for this project. When `null` is used this value will be automatically detected |
| `nodeVersion` | string ("24.x" | "22.x" | "20.x" | "18.x" | "16.x" | "14.x" | "12.x" | "10.x") | No | Node.js version for the project |
| `buildCommand` | string | No | The build command for this project. When `null` is used this value will be automatically detected |
| `publicSource` | boolean | No | Specifies whether the source code and logs of the deployments for this project should be public or not |
| `rootDirectory` | string | No | The name of a directory or relative path to the source code of your project. When `null` is used it will default to the project root |
| `ssoProtection` | object | No | SSO protection configuration. |
| `installCommand` | string | No | The install command for this project. When `null` is used this value will be automatically detected |
| `resourceConfig` | object | No | Resource configuration for the project. |
| `oidcTokenConfig` | object | No | OIDC token configuration. |
| `outputDirectory` | string | No | The output directory of the project. When `null` is used this value will be automatically detected |
| `directoryListing` | boolean | No | Whether directory listing is enabled |
| `gitForkProtection` | boolean | No | Specifies whether PRs from Git forks should require a team member's authorization before it can be deployed |
| `passwordProtection` | object | No | Password protection configuration. |
| `autoExposeSystemEnvs` | boolean | No | Whether to automatically expose system environment variables |
| `enablePreviewFeedback` | boolean | No | Opt-in to preview toolbar on the project level |
| `autoAssignCustomDomains` | boolean | No | Whether to automatically assign custom domains |
| `previewDeploymentSuffix` | string | No | Custom domain suffix for preview deployments. Takes precedence over team-level suffix. Must be a domain owned by the team |
| `enableProductionFeedback` | boolean | No | Opt-in to production toolbar on the project level |
| `serverlessFunctionRegion` | string | No | The region to deploy Serverless Functions in this project |
| `skipGitConnectDuringLink` | boolean | No | Opts-out of the message prompting a CLI user to connect a Git repository in `vercel link` |
| `previewDeploymentsDisabled` | boolean | No | Specifies whether preview deployments are disabled for this project |
| `commandForIgnoringBuildStep` | string | No | Command to determine if build step should be ignored |
| `customerSupportCodeVisibility` | boolean | No | Specifies whether customer support can see git source for a deployment |
| `sourceFilesOutsideRootDirectory` | boolean | No | Indicates if there are source files outside of the root directory |
| `autoAssignCustomDomainsUpdatedBy` | string | No | User who updated auto-assign custom domains setting |
| `enableAffectedProjectsDeployments` | boolean | No | Opt-in to skip deployments when there are no changes to the root directory and its dependencies |
| `serverlessFunctionZeroConfigFailover` | boolean | No | Specifies whether Zero Config Failover is enabled for this project |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Project Data Cache

**Slug:** `VERCEL_UPDATE_PROJECT_DATA_CACHE`

Tool to update the data cache feature for a Vercel project. Use when you need to enable or disable data caching for a project's deployments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `disabled` | boolean | No | Enable or disable data cache for the project. Set to true to disable, false to enable. Default is false (enabled). |
| `projectId` | string | Yes | The unique project identifier (e.g., 'prj_xxxx'). Note: Project names are not accepted, only project IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Project Domain

**Slug:** `VERCEL_UPDATE_PROJECT_DOMAIN`

Tool to update a project domain in Vercel. Use when you need to modify domain settings such as git branch association, redirects, or redirect status codes for an existing project domain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | Team slug to perform the request on behalf of |
| `domain` | string | Yes | The project domain name to update (e.g., 'www.example.com', 'api.mytest-domain.io') |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `idOrName` | string | Yes | The unique project identifier or project name |
| `redirect` | string | No | Target destination domain for redirect. When set, requests to this domain will redirect to the specified target domain. Set to null to remove redirect. |
| `gitBranch` | string | No | Git branch to link the project domain. When set, deployments from this branch will be accessible via this domain. Set to null to unlink the branch. Maximum 250 characters. |
| `redirectStatusCode` | integer ("301" | "302" | "307" | "308") | No | HTTP status code for redirect. Required when 'redirect' is set. 301: Permanent redirect (cached by browsers), 302: Temporary redirect, 307: Temporary redirect (preserves method), 308: Permanent redirect (preserves method). Set to null to remove redirect. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Project Protection Bypass

**Slug:** `VERCEL_UPDATE_PROJECT_PROTECTION_BYPASS`

Tool to update protection bypass for automation on a Vercel project. Use when you need to generate, revoke, or update automation bypass secrets for deployment protection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `revoke` | object | No | Instructions for revoking and regenerating an automation bypass. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `update` | object | No | Instructions for updating an existing automation bypass. |
| `generate` | object | No | Instructions for generating a new automation bypass secret. |
| `idOrName` | string | Yes | The unique project identifier or the project name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Shared Env Variable

**Slug:** `VERCEL_UPDATE_SHARED_ENV_VARIABLE`

Tool to update one or more shared environment variables. Use when you need to modify shared env var properties like value, target environments, or project linkages using their IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of |
| `teamId` | string | No | The Team identifier to perform the request on behalf of |
| `updates` | object | Yes | Object where each key is an environment variable ID (not the key name) and the value contains the updates to apply. The ID format is typically 'env_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Project Static IPs

**Slug:** `VERCEL_UPDATE_STATIC_IPS`

Tool to configure Static IPs for a Vercel project. Use when you need to enable or configure Static IPs for builds or specific regions. Requires either 'builds' or 'regions' parameter to be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `builds` | boolean | No | Whether to use Static IPs for builds. Must provide either 'builds' or 'regions' parameter. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `regions` | array | No | List of regions in which to enable Static IPs. Must provide either 'builds' or 'regions' parameter. Minimum 0 items, maximum 3 items. Each region code should be max 4 characters (e.g., 'iad1'). |
| `idOrName` | string | Yes | The unique project identifier or the project name |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Team

**Slug:** `VERCEL_UPDATE_TEAM`

Tool to update a Vercel team's configuration. Use when you need to modify team settings like name, description, security policies, or deployment settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the team. |
| `saml` | object | No | SAML configuration for the team. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `avatar` | string | No | The hash value of an uploaded image. |
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |
| `new_slug` | string | No | A new slug for the team. |
| `description` | string | No | A short text that describes the team. |
| `emailDomain` | string | No | Email domain for the team. |
| `remoteCaching` | object | No | Whether or not remote caching is enabled for the team |
| `hideIpAddresses` | boolean | No | Display or hide IP addresses in Monitoring queries. |
| `regenerateInviteCode` | boolean | No | Create a new invite code and replace the current one. |
| `enablePreviewFeedback` | string | No | Enable preview toolbar: one of on, off or default. |
| `previewDeploymentSuffix` | string | No | Suffix that will be used for all preview deployments. |
| `enableProductionFeedback` | string | No | Enable production toolbar: one of on, off or default. |
| `defaultExpirationSettings` | object | No | Default deployment expiration settings for new projects. |
| `hideIpAddressesInLogDrains` | boolean | No | Display or hide IP addresses in Log Drains. |
| `defaultDeploymentProtection` | object | No | Default deployment protection settings for new projects. |
| `sensitiveEnvironmentVariablePolicy` | string | No | Sensitive environment variable policy: one of on, off or default. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update URL Protection Bypass

**Slug:** `VERCEL_UPDATE_URL_PROTECTION_BYPASS`

Tool to update the protection bypass for a URL. Use when you need to configure shareable links with TTL, revoke/regenerate links, set user-scoped access permissions, or manage alias protection overrides.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The alias or deployment ID to update protection bypass for |
| `ttl` | integer | No | Optional time the shareable link is valid for in seconds. If not provided, the shareable link will never expire. Maximum: 63,072,000 seconds. |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `scope` | object | No | Configuration for user-scoped protection bypass. |
| `revoke` | object | No | Configuration for revoking/regenerating shareable links. |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `override` | object | No | Configuration for alias protection override. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Cache Artifact

**Slug:** `VERCEL_UPLOAD_ARTIFACT`

Tool to upload a cache artifact to Vercel. Use when you need to store build artifacts in Vercel's remote cache.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hash` | string | Yes | The artifact hash identifier |
| `slug` | string | No | Team slug to perform the request on behalf of |
| `teamId` | string | No | Team identifier to perform the request on behalf of |
| `artifact` | object | Yes | The artifact file to upload. |
| `x-artifact-tag` | string | No | The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header 'x-artifact-tag' |
| `x-artifact-duration` | integer | No | The time taken to generate the uploaded artifact in milliseconds |
| `x-artifact-client-ci` | string | No | The continuous integration or delivery environment where this artifact was generated |
| `x-artifact-client-interactive` | integer | No | 1 if the client is an interactive shell, otherwise 0 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Deployment File

**Slug:** `VERCEL_UPLOAD_FILE`

Tool to upload deployment files to Vercel. Use when preparing files for a Vercel deployment. The uploaded file is stored and returns CDN URLs for use in deployment creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `xNowSize` | integer | No | The file size as an alternative to Content-Length. |
| `xNowDigest` | string | No | Alternative to x-vercel-digest. The file SHA1 used to check integrity. |
| `contentLength` | integer | No | The file size in bytes. If not provided, it will be calculated automatically. |
| `xVercelDigest` | string | No | The file SHA1 hash used to check integrity. If not provided, the SHA1 hash will be automatically computed from the file content. |
| `file_to_upload` | object | Yes | File to upload. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify Project Domain

**Slug:** `VERCEL_VERIFY_PROJECT_DOMAIN`

Attempts to verify a project domain by checking if DNS challenges are correctly configured. Call this after adding a domain to a project and setting up the required DNS TXT records. Returns verified=true if DNS is correctly configured, or an error with the required DNS records if verification fails.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | No | The Team slug to perform the request on behalf of. |
| `domain` | string | Yes | The domain name to verify. This domain must have been previously added to the project and have the required DNS TXT records configured. Use VERCEL_GET_PROJECT_DOMAINS to see pending verifications. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `idOrName` | string | Yes | The unique project identifier (e.g., 'prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB') or the project name (e.g., 'my-project'). The domain must already be added to this project before verification. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `VERCEL_WHO_AM_I`

Return the identity (email, username) of the connected Vercel account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
