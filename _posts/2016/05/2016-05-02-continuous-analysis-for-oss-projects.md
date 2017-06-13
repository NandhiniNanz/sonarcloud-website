---
layout: post
title:  "Continuously analyze the source code of your open source projects!"
date:   2016-05-02
tags:
  - Features
---
If you're already relying on online ALM services to run your builds, manage your source code, track your project activity, ... You're just one-click away from continuously analyzing the quality of your source code with help of SonarCloud!

This online service relies on [SonarQube][sq-site], the widely-adopted open source platform allowing to detect bugs, vulnerabilities and code smells in many different languages.

The service is available for Open Source projects only, free of charge and with fair use. It is currently in Beta version and available only on invitation. Feel free to fill a request on the ["Contact" form](/contact/)  with your GitHub Account and the urls of the GitHub projects you'd like to analyze to get such invitation.

## Getting started in 3 easy steps

1. Sign in with your GitHub account
2. Generate a user token from the "My Account" > "Security" page
3. Build your project (from wherever you want) and then execute the following command line (example given for Maven projects):

{% highlight sh %}
mvn clean org.jacoco:jacoco-maven-plugin:prepare-agent package sonar:sonar \
    -Dsonar.host.url={{ site.service_url }} \
    -Dsonar.login=$SONAR_TOKEN
{% endhighlight %}

## Concrete examples with TravisCI

Feel free to take a look at the [sample projects](/redirects/sample-projects.html) to see more in details how you can configure your GitHub repository to quickly get analyzed using TravisCI.

Enjoy!

[sq-site]: http://www.sonarqube.org
