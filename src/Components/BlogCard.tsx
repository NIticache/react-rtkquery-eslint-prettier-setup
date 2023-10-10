
type blogCardType = { title: String, content: String }

const BlogCard = ({ title, content }: blogCardType) => {
  const style: React.CSSProperties = {
    padding: "20px",
    backgroundColor: "burlywood",
    border: "solid 2px green"
  }
  return (
    <div style={style}
    >
      <div>
        Titile :{title}
      </div>
      <div>
        Content :{content}
      </div>
    </div>
  )
}

export default BlogCard
