import React from "react";

const Nav = () => {
  return (
    <div>
      <ul class="nav nav-tabs" style={{ padding: "1.5rem" }}>
        <li class="nav-item">
          <a class="nav-link" href="/">
            首頁
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/preTest">
            前測題目
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/gridTable">
            自建凱利方格
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/postTest">
            後測題目
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
