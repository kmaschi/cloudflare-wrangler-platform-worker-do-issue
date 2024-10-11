# cloudflare-wrangler-platform-worker-do-issue
Example repository for issue deploying update to Cloudflare Platform Worker with Durable Object migrations.

## Reproduction steps
1. Create a Platform Worker by deploying into an existing dispatch namespace:
    ```shell
    yarn wrangler deploy --dispatch-namespace REDACTED
    ```
2. Observe the Platform Worker deploys successfully:
   ```shell
   % yarn wrangler deploy --dispatch-namespace REDACTED
   yarn run v1.22.19
   $ /wrangler-error-do-mig/node_modules/.bin/wrangler deploy --dispatch-namespace REDACTED
   
   ⛅️ wrangler 3.80.4
   -------------------
   
   Total Upload: 0.67 KiB / gzip: 0.37 KiB
   Your worker has access to the following bindings:
   - Durable Objects:
      - EXAMPLE_DURABLE_OBJECT: ExampleDurableObject
   Uploaded example-script-name (4.35 sec)
   Dispatch Namespace: REDACTED
   Current Version ID: a0871c1d-cd06-4082-bbb7-208c995ce8fc
   ✨  Done in 4.99s.
   ```
3. Update the Platform worker by deploying again:
    ```shell
    yarn wrangler deploy --dispatch-namespace REDACTED
    ```
4. Observe the Platform Worker fails to deploy:
   ```shell
   % yarn wrangler deploy --dispatch-namespace REDACTED
   yarn run v1.22.19
   $ /wrangler-error-do-mig/node_modules/.bin/wrangler deploy --dispatch-namespace REDACTED
   
   ⛅️ wrangler 3.80.4
   -------------------
   
   Total Upload: 0.67 KiB / gzip: 0.37 KiB
   Your worker has access to the following bindings:
   - Durable Objects:
      - EXAMPLE_DURABLE_OBJECT: ExampleDurableObject
   
   ✘ [ERROR] A request to the Cloudflare API (/accounts/REDACTED/workers/dispatch/namespaces/REDACTED/scripts/example-script-name) failed.
   
   Migration tag precondition failed; current tag is 'v1' [code: 10079]
   
   If you think this is a bug, please open an issue at:
   https://github.com/cloudflare/workers-sdk/issues/new/choose
   
   
   error Command failed with exit code 1.
   info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
   ```
   
Note that the same commands can be run without the `--dispatch-namespace` argument which deploys to create and update
Workers without issue.