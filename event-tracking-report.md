# Event tracking report

This document lists all PostHog events that have been automatically added to your Next.js application.

## Events by File

### src/app/add-blog/page.tsx

- **blog_submission_succeeded**: Fired when a user successfully submits a new Medium blog URL.
- **blog_submission_failed**: Fired when a user's attempt to submit a new Medium blog URL fails, either due to client-side validation or an API error.

### src/app/profile-form/page.tsx

- **profile-form-submitted**: Fired when a user submits the profile information form. Includes properties for submission status (success/failure), counts of dynamic fields, and an error message on failure.
- **profile-form-experience-added**: Fired when a user clicks the '+ Add' button to add a new work experience section to the form. Includes the new total count of experience fields.

### src/app/courses/[courseId]/page.tsx

- **chapter_selected**: Fired when a user selects a chapter from the course sidebar.
- **chapter_completion_toggled**: Fired when a user marks a chapter as complete or incomplete.

### src/app/product-detail/[id]/page.tsx

- **visit_product_website_clicked**: Fired when a user clicks a link to visit the product's external website from the product detail page. The `location` property indicates whether the click was from the header or the main call-to-action section.

### src/components/Header.tsx

- **navigation_link_clicked**: Fired when a user clicks a navigation link in the header, including the logo, desktop links, and mobile links.
- **mobile_menu_toggled**: Fired when a user clicks the button to open or close the mobile navigation menu.

### src/components/ContactSection.tsx

- **contact-form-submitted**: Triggered when a user successfully submits the contact form.
- **contact-form-submission-failed**: Triggered when the contact form submission fails due to a network or API error.

### src/components/BlogFilters.tsx

- **blog_author_filtered**: Fired when a user selects an author from the blog filter dropdown.
- **blog_author_filter_cleared**: Fired when a user clicks the 'Clear Filter' button for the blog author filter.

### src/components/Pagination.tsx

- **pagination_page_changed**: Fired when the user changes the page using the pagination controls (next, previous, or specific page number).

### src/components/RichTextEditor.tsx

- **rte_element_inserted**: Fired when a user inserts a special element (like a link, image, alert, note, info, or column layout) into the rich text editor.
- **rte_table_inserted**: Fired when a user inserts a table into the rich text editor. Includes properties for the number of rows and columns.


## Events still awaiting implementation
- (human: you can fill these in)
---

## Next Steps

1. Review the changes made to your files
2. Test that events are being captured correctly
3. Create insights and dashboards in PostHog
4. Make a list of events we missed above. Knock them out yourself, or give this file to an agent.

Learn more about what to measure with PostHog and why: https://posthog.com/docs/new-to-posthog/getting-hogpilled
