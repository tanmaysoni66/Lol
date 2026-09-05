<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Organic Mushroom Farm - XML Sitemap</title>
        <style>
          :root {
            --bg-color: #faf5ff;
            --container-bg: #ffffff;
            --text-main: #333333;
            --text-muted: #6b7280;
            --border-color: #e5e7eb;
            --table-header: #f3f4f6;
            --accent: #7e22ce;
            --link: #2563eb;
            --hover: #f9fafb;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg-color: #111827;
              --container-bg: #1f2937;
              --text-main: #f9fafb;
              --text-muted: #9ca3af;
              --border-color: #374151;
              --table-header: #111827;
              --accent: #a855f7;
              --link: #60a5fa;
              --hover: #374151;
            }
          }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: var(--text-main); margin: 0; padding: 2rem; background: var(--bg-color); transition: background-color 0.3s, color 0.3s; }
          .container { max-width: 1000px; margin: 0 auto; background: var(--container-bg); padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          h1 { color: var(--accent); font-size: 26px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
          p { color: var(--text-muted); font-size: 14px; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
          th { text-align: left; background-color: var(--table-header); padding: 14px; font-size: 14px; font-weight: 600; color: var(--text-main); border-bottom: 2px solid var(--border-color); }
          td { padding: 14px; border-bottom: 1px solid var(--border-color); font-size: 14px; color: var(--text-main); word-break: break-all; }
          tr:hover { background-color: var(--hover); }
          a { color: var(--link); text-decoration: none; font-weight: 500; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 4px 8px; border-radius: 9999px; font-size: 12px; font-weight: 600; background: var(--accent); color: white; margin-left: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🍄 Organic Mushroom Farm <span class="badge">Sitemap</span></h1>
          <p>This is an XML Sitemap, designed to be processed by search engines like Google. It is styled for easy reading.</p>
          <xsl:if test="sitemap:sitemapindex">
            <table>
              <tr>
                <th>Sitemap URL</th>
                <th>Last Modified</th>
              </tr>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <tr>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </table>
          </xsl:if>
          <xsl:if test="sitemap:urlset">
            <table>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <xsl:variable name="itemURL">
                      <xsl:value-of select="sitemap:loc"/>
                    </xsl:variable>
                    <a href="{$itemURL}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
