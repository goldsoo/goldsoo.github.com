---
layout: list
title: tag
permalink: /tag
---

<div class="postListWrap {{ page.title }}">
  <div class="postList">
    {% for tag in site.tags %}
    <div class="tagPartWrap">
      {% capture tag_name %}{{ tag | first }}{% endcapture %}
        <div class="tagName" id="#{{ tag_name }}">{{ tag_name }}</div>
        <ul>
          {% for post in site.tags[tag_name] %}
          <li>
              <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                <span class="title">{{ post.title }}</span>
                <span class="date">{{ post.date | date: "%b %-d, %Y" }}</span>
                <span class="contents">{{ post.excerpt | strip_html | truncatewords: 40 }}</span>
              </a>
          </li>
          {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</div>