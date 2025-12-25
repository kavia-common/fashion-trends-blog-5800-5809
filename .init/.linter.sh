#!/bin/bash
cd /tmp/kavia/workspace/code-generation/fashion-trends-blog-5800-5809/frontend_react_blog
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

