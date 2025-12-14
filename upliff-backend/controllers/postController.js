import Post from "../models/postModel.js";

// Create a post
export const createPost = async (req, res) => {
  const { communityId } = req.params;
  const { title, body, author } = req.body;

  try {
    const post = await Post.create({
      community: communityId,
      title,
      body,
      author,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all posts for a community
export const getPostsByCommunity = async (req, res) => {
  const { communityId } = req.params;

  try {
    const posts = await Post.find({ community: communityId }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
