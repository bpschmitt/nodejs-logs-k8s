# nodejs-logs-k8s

## Description

A very simple NodeJS demo app based on Express that generates log data using Winston logger.  Meant to be used in conjunction with the New Relic Logs integration for K8s.  Log data for each namespace can be shipped to separate New Relic sub-accounts.

## Installation

```
kubectl create ns team-one
kubectl create ns team-two
kubectl create secret generic nrlicensekey-teamone --from-literal=nrlicensekey=<NR LICENSE KEY> -n team-one
kubectl create secret generic nrlicensekey-teamtwo --from-literal=nrlicensekey=<NR LICENSE KEY> -n team-two
kubectl apply -f k8s/deployment.yaml
```

## Example Raw Log Output
```
{"entity.name":"logs-demo-1","entity.type":"SERVICE","hostname":"logs-demo-1-7574954cb-dhk7g","level":"info","message":"Success! Your app is running on on port 4000.","timestamp":1634565951241}
{"entity.guid":"MzMwNzA4N3xBUE18QVBQTElDQVRJT058NTQyMDU1NTMy","entity.name":"logs-demo-1","entity.type":"SERVICE","hostname":"logs-demo-1-7574954cb-dhk7g","level":"info","message":"You've visited the home page.  Your random number is 15","span.id":"cadfeba2165050c6","timestamp":1634569493818,"trace.id":"ebefe422fe08cb4cca9fb48b90081d8f"}
{"entity.guid":"MzMwNzA4N3xBUE18QVBQTElDQVRJT058NTQyMDU1NTMy","entity.name":"logs-demo-1","entity.type":"SERVICE","hostname":"logs-demo-1-7574954cb-dhk7g","level":"info","message":"You've visited the home page.  Your random number is 95","span.id":"86137b068df5f73b","timestamp":1634569504871,"trace.id":"b7cec2940f7ce26f51962fd2d8fb4351"}
```

## Need to Document

```
- Example fluent-bit.conf
```