import React from 'react'
import { Button, Comment} from 'semantic-ui-react'
export default function Yorum({author,comment}) {
    return (
        <Comment>
          <Comment.Avatar src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsLPn6eri5OWvtbjJzc/g4uPS1de4vcC+w8XW2drM0NK6v8HBxsizubymrLAhwmH0AAAE7klEQVR4nO2d25qrIAxGq1EUD7jf/2k31B5mWusIBElo1k1v/b+EJARILxdBEARBEARBEARBEARBEARBEARBEARBEARBEARB+F7AkvsbEmGFdePYT5Z+HLtLWUIBmlHptqotVeV+qlab3srM/WU4QKfmyil7oa616vibEi693lD3ULlMDWuN0Kh2R99VY2U6vhpB7au7Y5guSOi3Vt82E0OJ0MyH9Vlf1exc1RrQE25mNB4GvJlxyP3NPjR7GeIjCx9P7ZYAfY6Rh0ToAvVZT+UhMVwgEyt2bYxCDlaMEmjpcgv4Cx0psFqa3BJ2Af88+MZM2U+hjxdY1YqwxKgw+pQ45tbxEZhRFFZLbiGfgAnBRx21IeqnTWyieEqkmTLAYAmsqoGkETskH3WQDDYw4AmsKk3QiJgmJGlEzFXooGfEBlcgvXCKlgsfUMuJENq4+EibW9ILuHHGQSzWHO3f+0DMTaM3vu/QclN8J6Xmphg73zco7YSx0/0KpXYGfq64Qkgh3s7wJ5TKmjHFMiQVapIEGkqhJkW+d9DJ+WlCKaVgitVFfEXnFvYAEtRsDjp900TpkFBlCknSoYXMMZQoFIUMFKaKNHQUlp8tEmV8QgrLr9qKr7zL3z2l2gH3uXU9wT6WuSkk1MUovxNVfjex/I7wF3T1yz+Z+YLTtQQnpISyoaP8U+7ybyqUf9vkC24MlX/r6wtu7pV/+xJ1JZIqup/ghVN6gXQFLyeSy4V3sPqmdLqIb+AEG5phZgXFT0m/CkJ52UUyFf6g9Nd5CNejiCaKH8S9X+PwShbGGIU9fYFREmsWAt2D/NC1yMBFb3RBEZXR1AjL4D/5Q1NPE7/xn95CupLZAjqf+Sb1wmcJPvEwY61yf2wYcDnW668N34lm0Km/p2FxnmZ2cQOxpmVvIl2reOtzgDWkrjenCi5m5D9V8Apcut6skyFv2qp2MVMxkyFXrtM9+2lSyo337JpCjPcGQKkjWl+VlSP0KsR5pzLDPGu9rOh5GIyaxrFjLNV+uFWmhuU+eXYrmFoWbSZ+Q3fdVN3JOG2HaprKDd1VPReZ9itHpY/P9fyZHoeJ/NTdq7qjltu2punpqrTyzF6FdlikJmlKgNH8NTLYQ6WmNkDZlp548m4i55FMUWe9M8ldfSr7Drjsbo8iGbJrhObAFjeGWmdt4LgtfHIyajzahuGrcTpH31XjfP56hDFhfNni5Mn00Ph37WNpzzyXQhlT6s15rgqdz8R8VM4xY9wZbxznTKZHuE8SQZs6cUDwQHks6rT/oZDTQx8SU3oqqKweeifdnSKMK10otInSBpyf5T+SJt4E/StHIpJcnUr05j4U9OSfaqhAMNhWJCcQWyKZKPoLxHuaRPLgK3ijT/Jslg6Adqc/xTNmHLDeZeQutj+Dcx8V900aMhjPh8guwpUFwYi5NewT//yEtI86ov00zeQZTGKf2NCNo3fi4in+K/sURJkw98cfIaY3RbQefSVmvkSqeYi4hBuRxyqsYipw+oF0JXjQC/1ceCcwJ5IvZ56EFjZsTBj6pIj2puI3QbGGkZOGuimPZLgSlBLpdme2CPg7QTjxugwCAQuR1TKsQtrDqSZYJyKgrEnz1zHp8M+IOH/tex7+oYZPUbri31bksnO60/oqtNt7XvwLSIjM8BYoCIIgCIIgCIIgCIIgnMp/4IFQ7PFErjkAAAAASUVORK5CYII=' />
          <Comment.Content>
            <Comment.Author as='a'>{author && author}</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>{comment}</Comment.Text>
          </Comment.Content>
        </Comment>
    )
}
