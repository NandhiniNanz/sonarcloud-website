---
layout: page
permalink: /
---

{:.about-title}
# Continuous Code Quality Online

{:.about-subtitle}
Improve mechanically the quality of your project with [SonarCloud]({{ site.service_url }}),<br/>
available on 20 programming languages.

<div class="about about-price-tiers">
    <div class="about-price-tier">
        <em>Free</em>
        <h3>for open source</h3>
        <span>&nbsp;</span>
    </div>
    <div class="about-price-tier">
        <span>From <em>5&euro;</em>/mo</span>
        <h3>for private projects</h3>
        <a href="#" id="see-prices">see prices</a>
    </div>
</div>

<div id="prices">
    <header>Pricing</header>
    <section>
        The price of the service is based on the total number of lines of your private projects.<br/>
        Lines of public projects are free.
        <table>
            <thead>
                <tr>
                    <th>
                        <em>Lines</em>
                        <br/>
                        <span class="remark">Up to</span>
                    </th>
                    <th>
                        <em>Price *</em>
                        <br/>
                        <span class="remark">&euro; / month</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>25,000</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>50,000</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>100,000</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>250,000</td>
                    <td>75</td>
                </tr>
                <tr>
                    <td>500,000</td>
                    <td>150</td>
                </tr>
                <tr>
                    <td>1,000,000</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>2,500,000</td>
                    <td>700</td>
                </tr>
                <tr>
                    <td>5,000,000</td>
                    <td>1,400</td>
                </tr>
                <tr>
                    <td>10,000,000</td>
                    <td>2,500</td>
                </tr>
                <tr>
                    <td>20,000,000</td>
                    <td>4,000</td>
                </tr>
            </tbody>
        </table>
        <span class="remark">* 8% VAT will be added for Switzerland</span>
    </section>
    <footer>
        <a href="#" id="close-prices">Close</a>
    </footer>
</div>

<div class="about about-start">
    <div class="about-start-using">
        <span>Start using SonarCloud</span>
        <a href="/contact">Need help?</a>
    </div>
    <div class="about-start-signup">
        <a class="btn" href="/get-started">Configure &amp; Sign up</a>
        <a href="{{ site.service_url }}/sessions/new">Just sign up</a>
    </div>
</div>

<script src="js/jquery.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script>
$(function() {
    $('#see-prices').click(function() {
        $('#prices').dialog({
            modal: true
            , minWidth: 650
            , dialogClass: 'no-close'
        });
    });
    $('#close-prices').click(function() {
        $('#prices').dialog('close');
    });
});
</script>

<div class="about">
    <span class="explore">Explore open source projects on SonarCloud</span>
    <span class="explore-sub">
        SonarCloud offers free acces to analyze open source projects.<br/>
        This is public and open to everyone who wants to browse the service.
    </span>
    <span class="explore-sub">
        <a href="{{ site.service_url }}/projects" class="btn btn-explore">Browse</a>
    </span>
</div>
