---
layout: post
title:  "Real-life open-source projects analyzed on SonarCloud"
date:   2016-06-30
tags:
  - Info
---
SonarCloud can inspect continuously the quality of your source code and detect bugs, vulnerabilities and code smells in more than 20 different languages. Some well known open-source projects have already started using it. Let's take a look at them!


## oVirt

oVirt is a virtualization platform that manages virtual machines, storage and virtualized networks.

- Java
- Built with [SonarQube Scanner for Maven](http://redirect.sonarsource.com/doc/install-configure-scanner-maven.html) on Jenkins
- [Sources](https://github.com/oVirt/ovirt-engine)
- [See dashboard]({{ site.service_url }}/overview?id=org.ovirt.engine%3Aroot)

## SimGrid

SimGrid is a scientific instrument to study the behavior of large-scale distributed systems such as Grids, Clouds, HPC or P2P systems.

- C/C++
- Built with [SonarQube Scanner](http://redirect.sonarsource.com/doc/install-configure-scanner.html) and Build Wrapper on TravisCI
- [Sources](https://github.com/simgrid/simgrid)
- [See dashboard]({{ site.service_url }}/overview?id=simgrid)

## JHipster

JHipster is a Yeoman generator, used to create a Spring Boot + AngularJS project.

- Java & JavaScript
- Built with [SonarQube Scanner for Maven](http://redirect.sonarsource.com/doc/install-configure-scanner-maven.html) on TravisCI
- [Sources](https://github.com/jhipster/jhipster-sample-app)
- [See dashboard]({{ site.service_url }}/overview?id=io.github.jhipster.sample%3Ajhipster-sample-application)

## OpenCover

OpenCover is a code coverage tool for .NET 2 and above (Windows OSs only - no MONO), with support for 32 and 64 processes and covers both branch and sequence points.

- C#
- Built with [SonarQube Scanner for MSBuild](http://redirect.sonarsource.com/doc/install-configure-scanner-msbuild.html) on AppVeyor
- [Sources](https://github.com/OpenCover/opencover)
- [See dashboard]({{ site.service_url }}/overview?id=opencover)
