import ReactMarkdown from 'react-markdown'

export default function SiteFooter({ content }) {
  return (
    <footer className="site-footer">
      <div className="container container--narrow">
        <ReactMarkdown>
          {content.Footer}
        </ReactMarkdown>
      </div>
    </footer>
  )
}
