---
layout: post
title:  "SonarCloud is now open to anyone!"
date:   2016-09-01
tags:
  - Features
---

Connect with your GitHub account on [SonarCloud]({{ site.service_url }}), create a token, run a first SonarQube analysis on your open source project and enjoy!

## Never used SonarCloud before?

The service is available for **open source projects**, free of charge and with fair use (read more on the ["About" page](/)).

### Get started in 3 easy steps

1. Sign in with your GitHub account
2. Generate a user token from the ["My Account" > "Security" page]({{ site.service_url }}/account/security)
3. Build your project (from wherever you want) and then execute the following command line:

{% highlight sh %}
# Example given for Maven projects
mvn clean org.jacoco:jacoco-maven-plugin:prepare-agent package sonar:sonar \
    -Dsonar.host.url={{ site.service_url }} \
    -Dsonar.login=440327d4b5046c1 # Replace with the value of your own token
{% endhighlight %}

Once the analysis is successful, your project will appear shortly after in the ["My Account" > "Projects" page]({{ site.service_url }}/account/projects).

### Concrete examples with TravisCI

Take a look at the [sample projects](/redirects/sample-projects.html) to see in detail how you can configure your GitHub repository to quickly get analyzed using TravisCI.

## More freedom for existing users!

If you are one of the couple hundred lucky open source developers who got an invitation over the past few months, you can now add new projects on your own - no need to contact us. This is as simple as running a first analysis on your new project!

Enjoy!
