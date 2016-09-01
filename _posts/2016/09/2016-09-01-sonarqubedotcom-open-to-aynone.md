---
layout: post
title:  "SonarQube.com is now open to anyone!"
date:   2016-09-01
tags:
  - Feature
---

Connect with your GitHub account on [SonarQube.com](https://sonarqube.com), create a token, run a first SonarQube analysis on your project and enjoy!

**[SonarQube.com](https://sonarqube.com)** is a service operated by **[SonarSource](http://www.sonarsource.com)**, the company that develops and promotes open-source code quality products **[SonarQube](http://www.sonarqube.org)** and **[SonarLint](http://www.sonarlint.org)**. The service is available for **open source projects only**, free of charge and with fair use (see ["About"](/)).

## Never used SonarQube.com before?

### Get started in 3 easy steps

1. Sign in with your GitHub account
2. Generate a user token from the ["My Account" > "Security" page](https://sonarqube.com/account/security)
3. Build your project (from wherever you want) and then execute the following command line:

{% highlight sh %}
mvn clean org.jacoco:jacoco-maven-plugin:prepare-agent package sonar:sonar \
    -Dsonar.host.url=https://sonarqube.com \
    -Dsonar.login=$SONAR_TOKEN
{% endhighlight %}
*(Example given for Maven projects)*

Once the analysis is successful, your project will appear shortly after in the ["My Account" > "Projects" page](https://sonarqube.com/account/projects).

### Concrete examples with TravisCI

Feel free to take a look at the [sample projects](/redirects/sample-projects.html) to see more in details how you can configure your GitHub repository to quickly get analyzed using TravisCI.

## More freedom for existing users!

If you are part of the couple of hundreds of lucky open source developers who got an invitation over the past months, you can now add new projects on your own - no need to contact us. This is as simple as running a first analysis on your new project!

Enjoy!
