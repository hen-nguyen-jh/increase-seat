
## Clone project

- Navigate to the folder you want to store this project (in the terminal)
- Clone the project repo with the following command

``` bash
git clone https://github.com/hen-nguyen-jh/increase-seat.git sharetribe-increase-seat
cd sharetribe-increase-seat
```

## Setting up

> Your computer must have `bun` installed before proceed the below part.

Install dependencies

``` bash
bun install
```

Create `.env` file 

```
SHARETRIBE_INTEGRATION_SDK_CLIENT_ID=<client-id>
SHARETRIBE_INTEGRATION_SDK_CLIENT_SECRET=<client-secret>
```

## How to use

``` bash
bun run start <listing-id>

For example:

bun run start 67b7f55a-1dc9-4a75-8780-cb90b87e04eb
```
